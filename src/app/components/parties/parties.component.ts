import { Component, OnInit } from '@angular/core';
import {Party} from '../../models/Party';
import {EventsService} from '../../services/events.service';
import {PartiesService} from '../../services/parties.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.component.html',
  styleUrls: ['./parties.component.css'],
  providers: [PartiesService]

})
export class PartiesComponent implements OnInit {
pariesList: Party[]=[];
  constructor(private parties: PartiesService) { }

  ngOnInit() {
    this.parties.getParty().subscribe(
      (data)=>{
        console.log(data);
        this.pariesList = data;
      }
    );
  }
  decriment(param){
    this.pariesList[this.pariesList.indexOf(param.party)].nb_place= this.pariesList[this.pariesList.indexOf(param.party)].nb_place-param.dec;
  }



}
