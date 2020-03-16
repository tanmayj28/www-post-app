import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services';
import { PostsComponent } from './post/posts.component';
import { VisitorsComponent } from './visitor/visitors.component';
import { Visitor } from "../../model/visitor";

@Component({
  selector: 'home-page-selector',
  templateUrl: './homepage.component.html'
})

export class HomepageComponent implements OnInit {
  constructor(private postService: PostService) {
  }
  logginRequired = false;
  visitor: Visitor;

  ngOnInit(): void {

  }

  recieveVisitor($event: Visitor) {
    this.visitor = $event;
    this.logginRequired = false;
  }

  recieveLoginCheck($event) {
    if (!$event) {
      this.logginRequired = true;
    }
  }
}
