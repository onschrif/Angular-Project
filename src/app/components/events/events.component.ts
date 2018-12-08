import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events.service';
import {AreaService} from '../../services/area.service';
import {Event} from '../../models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventsService]
})
export class EventsComponent implements OnInit {
listEvents: Event[];
  constructor(private events: EventsService) {

  }

  ngOnInit() {
    this.events.getEvent().subscribe(
      (data)=>{
        console.log(data);
        this.listEvents = data;
      }
    );
  }

}
