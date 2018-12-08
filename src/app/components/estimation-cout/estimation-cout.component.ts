import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estimation-cout',
  templateUrl: './estimation-cout.component.html',
  styleUrls: ['./estimation-cout.component.css']
})
export class EstimationCoutComponent implements OnInit {
nbr: number;
position: string;
cout = 0;
hide = true;
  constructor() { }

  ngOnInit() {
  }
calculerCout() {
    this.hide=false;
    if(this.position=="haut"){
      if(this.nbr<=30){
 this.cout=10;
      }else{
        this.cout=20;
      }
    }else if(this.position=="bas"){
      if(this.nbr<=30){
        this.cout=5;
      }else{
        this.cout=15;
      }
    }
}
}
