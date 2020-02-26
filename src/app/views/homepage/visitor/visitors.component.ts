import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VisitorService } from '../../../services';
import { Visitor } from '../../../model/visitor'

@Component({
  selector: 'Visitor',
  templateUrl: './visitors.component.html'
})

export class VisitorsComponent implements OnInit {
  public visitor: Visitor = new Visitor();
  public visitorList: Array<Visitor> = [];
  public selected: Visitor;

  constructor(private visitorService: VisitorService) {
  }
  @Output() messageEvent = new EventEmitter<Visitor>();

  ngOnInit(): void {
    this.getVisitors();
  }

  getVisitors() {
    this.visitorList = [];
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
    this.messageEvent.emit(this.visitor);
  }

  createVisitor() {
    this.visitorService.createVisitor(this.visitor).subscribe(
      response => {
        alert("succefully submitted");
      }
    );
    this.getVisitors();
  }
}
