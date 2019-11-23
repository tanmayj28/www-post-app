import { Component, OnInit } from '@angular/core';
import { UpvoteService } from '../../../services';

@Component({
  selector: 'Upvote',
  templateUrl: './upvotes.component.html'
})

export class UpvotesComponent implements OnInit {
  constructor(private upvoteService: UpvoteService) {
    
  }

  ngOnInit(): void {

  }
}
