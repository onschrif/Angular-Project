import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Ticket} from '../../models/Ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  constructor() { }
  @Input() t: Ticket;
  @Output() newEvent = new EventEmitter();
  details: boolean= true;
  ngOnInit() {
  }
  sendToParent(param) {
    this.newEvent.emit(param);
  }
  showDetails() {
this.details = !this.details;
  }
}
