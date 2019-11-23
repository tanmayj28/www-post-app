import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitorService } from '../../../services';
import { Visitor } from '../../../model/visitor'

@Component({
  selector: 'Visitor',
  templateUrl: './visitors.component.html'
})

export class VisitorsComponent implements OnInit {
  visitor:Visitor
  public visitorList: Visitor[] = [];
  constructor(private visitorService: VisitorService) {
  }
  @Output() messageEvent = new EventEmitter<Visitor>();

  ngOnInit(): void {
    this.visitorService.getVisitors().subscribe(
			response => {
        console.log(response);
				for (const item of response) {
					this.visitorList.push(item);
				}
			}
		);
  }

  sendVisitor(){
    this.messageEvent.emit(this.visitor)
  }
}
