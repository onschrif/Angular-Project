import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      { fname: 'racem', lname: 'bensaid', email: '@gmail.com'}
      , { fname: 'aaa', lname: 'bbb', email: '@yahoo.com'}
    ];
  }

}
