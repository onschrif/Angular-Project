import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AnnoncesService {
  constructor(private http: Http) {
    console.log('test');
  }
  getAnnonce() {
    return this.http.get('../assets/Annonces.json').map(res => res.json());
  }
}
