import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostService } from '../../../services';
import { Post } from 'src/app/model/post';
import { UpvotesComponent } from './upvote/upvotes.component';
import { Visitor } from 'src/app/model/visitor';


@Component({
  selector: 'Post',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit, OnChanges {
  public postList: Post[] = [];
  public post: Post = new Post();
  public visitorUpvotedPosts: any = [];
  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
  }
  @Input() visitor: Visitor;
  @Output() loginEvent = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.getPosts();
  }

  ngOnChanges(change): void {
    if (this.visitor) {
      console.log(this.visitor, "oChange")
      this.getVisitorPosts()
    }
  }

  getVisitorPosts() {
    this.postService.getVisitorPosts(this.visitor.id).subscribe((response) => {
      console.log(response, "get rrserr")
      this.visitorUpvotedPosts = response.upvoted_posts;

    },
      (error) => {
        console.log(error)
      })
  }

  getPosts() {
    this.postService.getPosts().subscribe(
      response => {
        this.postList = [];
        console.log(response);
        for (const item of response) {
          this.postList.push(item);
        }
      }
    );
  }

  createPost() {
    this.post['visitor_id'] = this.visitor.id;
    console.log(this.post);
    this.postService.createPost(this.post).subscribe(
      response => {
        console.log(response);
        alert("Succesfully created Post!");
      }
    )
  }

  toggleUpvote(item) {
    if (!this.visitor) {
      return false;
    }
    return this.visitorUpvotedPosts.includes(item.id);
  }

  sendMessage() {
    this.loginEvent.emit(this.visitor ? true : false)
  }

  onVoted(event) {
    console.log(event);
    this.getPosts();
    this.getVisitorPosts()
  }

}
