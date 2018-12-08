import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() PData: number;
@Output() eventChild = new EventEmitter();
  constructor() { }
  onChange(val) {
   this.eventChild.emit(val / 3);
  }
  ngOnInit() {
  }

}
