import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserModel} from '../../models/UserModel';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
user = new UserModel() ;
  constructor() { }

  ngOnInit() {
  }

}
