import {Component, Input, OnInit} from '@angular/core';
import {Ticket} from '../../models/Ticket';
import {UserModel} from '../../models/UserModel';
import {Event} from '../../models/Event';
import {EventsService} from '../../services/events.service';
import {TicketsService} from '../../services/tickets.service';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.css']
})
export class ListTicketsComponent implements OnInit {

  constructor() { }
  @Input() hide: boolean;
  ticket = new Ticket() ;
  listTicket: Ticket[] = [];
  id: number = 1;


  ngOnInit() {
  }
addTciket(t) {
    t.id = this.id++;
this.listTicket.push(t);
this.ticket = new Ticket();
}
  delete(t) {
    console.log(t);
    this.listTicket.splice(this.listTicket.indexOf(t),1);
  }
}
