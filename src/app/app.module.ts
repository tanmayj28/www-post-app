import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PostsComponent } from './views/homepage/post/posts.component';
import { UpvotesComponent } from './views/homepage/upvote/upvotes.component';
import { VisitorsComponent } from './views/homepage/visitor/visitors.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PostsComponent,
    UpvotesComponent,
    VisitorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
