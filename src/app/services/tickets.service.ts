import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketsService {
  constructor(private http: Http) {
    console.log('test');
  }
  getEvent() {
    return this.http.get('../assets/tickets.json').map(res => res.json());
  }
}
