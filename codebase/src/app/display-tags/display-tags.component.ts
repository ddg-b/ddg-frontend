import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-tags',
  templateUrl: './display-tags.component.html',
  styleUrls: ['./display-tags.component.css']
})
export class DisplayTagsComponent {
  @Input() tagsArray: { tag: any }[] = [];
  @Input() gifId: number = 0;
  sortedTags: { tag: any }[] = [];

  ngOnInit() {
    this.sortTags(this.tagsArray);
  }


  updateTags(updatedTags: { tag: string }[]) {
    this.tagsArray = updatedTags;
    this.sortTags(updatedTags);
  }

  sortTags(tagsArray: Array<any>) {
    this.sortedTags = tagsArray.sort((a, b) => {
      return a.tag.localeCompare(b.tag, undefined, {
        sensitivity: 'base',
        ignorePunctuation: true,
      });
    });
  }
}
