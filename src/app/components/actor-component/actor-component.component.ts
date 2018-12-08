import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Actor} from '../../models/Actor';

@Component({
  selector: 'app-actor-component',
  templateUrl: './actor-component.component.html',
  styleUrls: ['./actor-component.component.css']
})
export class ActorComponentComponent implements OnInit {
  @Input() actor: Actor;
  @Output() newEvent = new EventEmitter();
  @Output() favEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  sendToParent(param) {
this.newEvent.emit(param);
}
  sendFavToParent(param) {
    this.favEvent.emit(param);
  }
}
