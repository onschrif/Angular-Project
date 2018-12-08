import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Party} from '../../models/Party';

@Component({
  selector: 'app-details-party',
  templateUrl: './details-party.component.html',
  styleUrls: ['./details-party.component.css']
})
export class DetailsPartyComponent implements OnInit {
@Input() party = new Party();
@Input() nb_rest: number;
hide = true;
@Output()dec: number;
@Output() newEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChange(){
    this.hide=false;
  }
  sendToParent(param) {
    this.newEvent.emit({'party':param,'dec':this.dec});
  }
}
