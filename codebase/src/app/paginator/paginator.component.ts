import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit{
  @Input() data: any;
  paginator: any;
  @Input() RouteUrl: any = {};
  currentUrl = '';
  currentPage: number = 1;
  queryParams: any = {};

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentUrl = this.router.url;

    this.router.events.subscribe(() => {
      this.currentUrl = this.router.url;
    });
  }


  ngOnInit()
  {
    this.activatedRoute.queryParamMap.subscribe((queryParams) => {
      const page = parseInt(queryParams.get('page') ?? '', 10);
      this.currentPage = isNaN(page) || page <= 1 ? 1 : page;
      this.buildPaginator();
    });


  }

  buildPaginator() {
    const countPage = ~~(this.data['hydra:view']['hydra:last'].split('page=')[1]);
    const pageArray = Array.from({ length: countPage }, (_, index) => {
      return {
        pageNumber: index + 1,
        isCurrent: index + 1 === this.currentPage,
      };
    });

    let displayedPages: any[] = [];
    if (pageArray.length > 10) {
      pageArray.forEach((function (obj, key) {
        if (
          obj.pageNumber === 1 ||
          obj.pageNumber === 2 ||
          obj.pageNumber === pageArray.slice(-1)[0]["pageNumber"] ||
          obj.pageNumber === pageArray.slice(-2)[0]["pageNumber"] ||
          obj.pageNumber === pageArray[key - 1]["pageNumber"]
        ) {
          displayedPages.push(obj);
        }
        if (obj.isCurrent) {
          if (pageArray[key - 1] !== void 0) {
            displayedPages.push(pageArray[key - 1]);
          }
          displayedPages.push(obj);
          if (pageArray[key + 1] !== void 0) {
            displayedPages.push(pageArray[key + 1]);
          }
        }
      }));
    } else {
      displayedPages = pageArray;
    }

    const uniquePages = displayedPages.filter((obj, index, array) =>
      array.findIndex((o) => o.pageNumber === obj.pageNumber) === index
    );

    this.paginator = uniquePages.sort((a, b) => a.pageNumber - b.pageNumber);
    this.RouteUrl._value.forEach((obj: any) => {
      this.currentUrl = this.currentUrl.concat('/'+ obj.path)
    });
  }

  addQueryParam(pageNumber: number) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams['page'] = pageNumber;

    // these 2 lines are deprecated but working well.
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge', // Preserve existing query parameters
    }).then(r => /*window.location.reload()*/{});
  }

  getUrlTree(pageNumber: number) {
    const queryParams = { ...this.activatedRoute.snapshot.queryParams };
    queryParams['page'] = pageNumber;
    return this.router.createUrlTree([], {
      relativeTo: this.activatedRoute,
      queryParams: queryParams,
      queryParamsHandling: 'merge',
    });
  }
}
