import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EventsService {
  constructor(private http: Http) {
    console.log('test');
  }
  getEvent() {
    return this.http.get('../assets/events.json').map(res => res.json());
  }
}
