import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataDisplayComponent } from './data-display/data-display.component';

import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { FormUpdateTagsComponent } from './form-update-tags/form-update-tags.component';
import {FormsModule} from "@angular/forms";
import { DisplayTagsComponent } from './display-tags/display-tags.component';
import { DisplayGifsMostUsedComponent } from './display-gifs-most-used/display-gifs-most-used.component';
import { DisplayGifsLastUsedComponent } from './display-gifs-last-used/display-gifs-last-used.component';
import { DisplayGifsNewestComponent } from './display-gifs-newest/display-gifs-newest.component';
import { HomeComponent } from './home/home.component';
import { MemberPageComponent } from './member-page/member-page.component';
import { MemberHeaderPageComponent } from './member-header-page/member-header-page.component';
import { DisplayMembersComponent } from './display-members/display-members.component';
import { DisplayTagsTableComponent } from './display-tags-table/display-tags-table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { DisplayGifsByTagComponent } from './display-gifs-by-tag/display-gifs-by-tag.component';
import { DisplayGifByIdComponent } from './display-gif-by-id/display-gif-by-id.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import {NgOptimizedImage} from "@angular/common";
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataDisplayComponent,
    ImagePreviewComponent,
    FormUpdateTagsComponent,
    DisplayTagsComponent,
    DisplayGifsMostUsedComponent,
    DisplayGifsLastUsedComponent,
    DisplayGifsNewestComponent,
    HomeComponent,
    MemberPageComponent,
    MemberHeaderPageComponent,
    DisplayMembersComponent,
    DisplayTagsTableComponent,
    PaginatorComponent,
    DisplayGifsByTagComponent,
    DisplayGifByIdComponent,
    SearchComponent,
    SearchResultsComponent,
    LogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
