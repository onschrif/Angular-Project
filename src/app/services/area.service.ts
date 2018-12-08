import {Injectable} from '@angular/core';

@Injectable()
export class AreaService {
constructor() {

}

  CalculerCarre(nbr) {
    return nbr * nbr;
  }

  CalculeCercle(nbr) {
    return nbr * nbr * 3.14 ;
  }
}
