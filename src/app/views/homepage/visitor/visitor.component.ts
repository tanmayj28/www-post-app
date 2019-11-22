import { Component, OnInit } from '@angular/core';
import { VisitorService } from '../../../services';

@Component({
  selector: 'app-lender-loans',
  templateUrl: './lender-loans.template.html'
})

export class VisitorsComponent implements OnInit {
  constructor(private visitorService: VisitorService) {
    
  }

  ngOnInit(): void {

  }
}
