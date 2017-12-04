import { Injectable } from '@angular/core';
//import {DUMMY_DATA_EVENTS} from './data/dummy-data';
import {Event} from './event'
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {


  constructor(private http: Http) { }

  private BASE_URL = "http://localhost:10473/api/Events"

  getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}
  

  getEvents(dateString): Promise<Event[]> {
    console.log(this.BASE_URL + "?startDate=" + dateString);
    
    return this.http.get(this.BASE_URL + "?&startDate=" + dateString)
     .toPromise()
     .then(response => response.json() as Event[])
     .catch(this.handleError);
  }

  getEventById(id: number): Promise<Event> {
    return this.getEvents("")
      .then(result => result.find(event => event.eventId === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
  private headers = new Headers({'Content-Type': 'application/json'});
  update(event: Event): Promise<Event> {
    const url = `${this.BASE_URL}/${event.eventId}`;
    return this.http
      .put(url, JSON.stringify(event), {headers: this.headers})
      .toPromise()
      .then(() => event)
      .catch(this.handleError);
  }
}
