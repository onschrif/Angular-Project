import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string ;
  email: string ;
  address: string;
  hobbies: string[];
  showHobbies: boolean;
  constructor() { }

  ngOnInit() {
    this.name = 'racem';
    this.email = '@esprit.tn';
    this.address = 'rte1';
    this.hobbies = ['a', 'b', 'c'];
    this.showHobbies = false;
  }
  delete(index) {
  console.log(index);
  this.hobbies.splice(index, 1);
  }
  addHobby(elt) {
    this.hobbies.push(elt);
  }
  toggleHobbies() {
    this.showHobbies = !this.showHobbies;
  }

}
