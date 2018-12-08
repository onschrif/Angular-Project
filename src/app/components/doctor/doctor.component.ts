import { Component, OnInit } from '@angular/core';
import {Doctor} from '../../models/Doctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
specialilte: string[]=['ophtalmologiste','radiologue','Pédiatre'];
doctors: Doctor[] = [ {name:'dr sphie',specialite:'ophtalmologiste',disponibilite:true},{name:'dr alexander',specialite:'radiologue',disponibilite:true},{name:'dr nadir',specialite:'radiologue',disponibilite:false}];
  newList: Doctor[]=[];
  hide=true;
  selectedDoctor= new Doctor();
  constructor() { }

  ngOnInit() {
  }
  getNewList(param){
    for (let doctor of this.doctors) {
      if(doctor.specialite == param){
        this.newList.push(doctor);
      }
    }
  }
  onChange(param){
    this.selectedDoctor=param;
    this.hide=false;
  }
  confirmer(param){
    this.doctors[this.doctors.indexOf(param)].disponibilite= false;

  }
}
