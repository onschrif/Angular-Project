import { Component, OnInit } from '@angular/core';
import {Actor} from '../../models/Actor';

@Component({
  selector: 'app-actors-component',
  templateUrl: './actors-component.component.html',
  styleUrls: ['./actors-component.component.css']
})
export class ActorsComponentComponent implements OnInit {
  listActors: Actor[]
  favList: Actor[]
  status = false;
  constructor() { }

  ngOnInit() {
    this.listActors =
      [ {'lastName': 'Robert', 'firstName': 'Julia'}, {'lastName':'Walker','firstName':'Paul'}, {'lastName':'Pitt','firstName':'Brad'}, ];
    this.favList = [];
  }
  delete(actor) {
    console.log(actor);
    this.listActors.splice(this.listActors.indexOf(actor),1);
  }
  addToFav(actor) {

    if (!this.favList.includes(actor)) {
      this.favList.push(actor);
    } else {
      this.favList.splice(this.favList.indexOf(actor),1);
    }

  }

  showFav() {
this.status = !this.status;
  }

}
