import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services';
import { Post } from 'src/app/model/post';
import {Visitor} from 'src/app/model/visitor';

@Component({
  selector: 'Post',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
  public postList: Post[] = [];
  public post:Post = new Post();
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  @Input() visitor:Visitor;
  @Output() loginEvent =  new EventEmitter<boolean>();

  ngOnInit(): void {
    this.postService.getPosts().subscribe(
			response => {
        console.log(response);
				for (const item of response) {
					this.postList.push(item);
				}
			}
		);
  }

  createPost() {
    this.postService.createPost(this.post).subscribe(
      response => {
        console.log(response);
      }
    )
  }
  sendMessage() {
    this.loginEvent.emit(this.visitor?true:false)
  }
}
