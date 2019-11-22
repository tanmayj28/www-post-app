import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'home-page-selector',
  templateUrl: './homepage.component.html'
})

export class HomepageComponent implements OnInit {
  constructor(private postService: PostService) {
    
  }

  ngOnInit(): void {

  }
}
