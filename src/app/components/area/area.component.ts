import { Component, OnInit } from '@angular/core';
import {AreaService} from '../../services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css'],
  providers: [AreaService]
})
export class AreaComponent implements OnInit {
  resultat = 0;
  constructor(private area: AreaService) { }

  ngOnInit() {
  }
  CalculerCarre(nbr) {
    this.resultat = this.area.CalculerCarre(nbr);
  }
  CalculeCercle(nbr) {
    this.resultat = this.area.CalculeCercle(nbr);
  }


}
