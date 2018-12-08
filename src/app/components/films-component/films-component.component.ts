import { Component, OnInit } from '@angular/core';
import {Film} from '../../models/Film';
@Component({
  selector: 'app-films-component',
  templateUrl: './films-component.component.html',
  styleUrls: ['./films-component.component.css']
})
export class FilmsComponentComponent implements OnInit {
  listFilms: Film[];
  count: number;
  countNonAction: number;

  constructor() {

  }
  ngOnInit() {

    this.listFilms=[{'nom':'MANDY','duree':'2 heures','categorie':'action'}
      , {'nom':'LOVE AFTER LOVE','duree':'3 heures','categorie':'drama'}
      , {'nom':'YOU WERE NEVER REALLY HERE','duree':'2 heures','categorie': 'comic'}
      , {'nom':'THE RIDER','duree':'3 heures','categorie':'drama'}
      , {'nom':'FIRST REFORMED','duree':'2 heures','categorie':'action'}];
  }
  calcul(categorie) {
    this.count = 0;
    this.countNonAction = 0;
    for (let film of this.listFilms) {
     if ( film.categorie == categorie) {
  this.count++;
     }else {
       this.countNonAction++;
     }
    }

  }

}
