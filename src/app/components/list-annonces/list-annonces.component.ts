import { Component, OnInit } from '@angular/core';
import {Annonce} from '../../models/Annonce';
import {AnnoncesService} from '../../services/AnnoncesService';
import {EventsService} from '../../services/events.service';

@Component({
  selector: 'app-list-annonces',
  templateUrl: './list-annonces.component.html',
  styleUrls: ['./list-annonces.component.css'],
  providers: [AnnoncesService]
})
export class ListAnnoncesComponent implements OnInit {
  listAnnonces: Annonce[];
  constructor(private annonces: AnnoncesService) {

  }

  ngOnInit() {
    this.annonces.getAnnonce().subscribe(
      (data) => {
        console.log(data);
         this.listAnnonces = data;
      }
    );
  }

}
