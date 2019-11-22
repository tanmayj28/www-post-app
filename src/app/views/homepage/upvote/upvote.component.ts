import { Component, OnInit } from '@angular/core';
import { UpvoteService } from '../../../services';

@Component({
  selector: 'app-lender-loans',
  templateUrl: './lender-loans.template.html'
})

export class UpvotesComponent implements OnInit {
  constructor(private upvoteService: UpvoteService) {
    
  }
  
  ngOnInit(): void {

  }
}
