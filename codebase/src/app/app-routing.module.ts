import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DisplayGifsMostUsedComponent} from "./display-gifs-most-used/display-gifs-most-used.component";
import {DisplayGifsLastUsedComponent} from "./display-gifs-last-used/display-gifs-last-used.component";
import {DisplayGifsNewestComponent} from "./display-gifs-newest/display-gifs-newest.component";
import {HomeComponent} from "./home/home.component";
import {MemberPageComponent} from "./member-page/member-page.component";
import {DisplayMembersComponent} from "./display-members/display-members.component";
import {DisplayTagsTableComponent} from "./display-tags-table/display-tags-table.component";
import {DisplayGifsByTagComponent} from "./display-gifs-by-tag/display-gifs-by-tag.component";
import {DisplayGifByIdComponent} from "./display-gif-by-id/display-gif-by-id.component";
import {SearchResultsComponent} from "./search-results/search-results.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'les-gifs-les-plus-utilises', component: DisplayGifsMostUsedComponent },
  { path: 'les-derniers-gifs-postes', component: DisplayGifsLastUsedComponent },
  { path: 'les-nouveaux-gifs-postes', component: DisplayGifsNewestComponent },
  { path: 'posteurs', component: DisplayMembersComponent },
  { path: 'posteur/:username', component: MemberPageComponent },
  { path: 'tags', component: DisplayTagsTableComponent },
  { path: 'tags/:page', component: DisplayTagsTableComponent },
  { path: 'tag/:tag', component: DisplayGifsByTagComponent },
  { path: 'gif/:gif_id', component: DisplayGifByIdComponent },
  { path: 'recherche', component: SearchResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
