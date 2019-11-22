import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services';

@Component({
  selector: 'app-lender-loans',
  templateUrl: './lender-loans.template.html'
})

export class PostsComponent implements OnInit {
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    
  }
  
  ngOnInit(): void {

  }
}
