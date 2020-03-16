import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { UpvoteService } from '../../../../services';
import { error } from 'protractor';

@Component({
  selector: 'Upvote',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss']
})

export class UpvotesComponent implements OnInit, OnChanges {
  constructor(private upvoteService: UpvoteService) {

  }

  
  @Input() visitor: number;
  @Input() post: any;
  @Input() disabled: any;
  @Output() voted = new EventEmitter<any>();

  ngOnChanges(changes): void {
    console.log(this.visitor, this.post, this.disabled);
  }

  incre() {
    console.log(this.visitor, this.post, this.disabled);
  }

  ngOnInit(): void {

    console.log(this.visitor, this.post, this.disabled);

  }

  onUpvote() {
    this.upvoteService.postUpvote({post_id:this.post.id, visitor_id:this.visitor}).subscribe((response)=>{
      console.log("successfully upvoted");
      this.voted.emit("upvoted");
    }, error=>{
      console.log(error)
    })
  }

  onDownvote() {
    this.upvoteService.deleteUpvote({post_id:this.post.id, visitor_id:this.visitor}).subscribe((response)=>{
      console.log("successfully downvoted");
      this.voted.emit("downvoted");
    }, error=>{
      console.log(error)
    })
  }
}
