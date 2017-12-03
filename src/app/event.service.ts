import { Injectable } from '@angular/core';
import {DUMMY_DATA_EVENTS} from './data/dummy-data';
import {Event} from './event'

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Promise<Event[]> {   
    return Promise.resolve(DUMMY_DATA_EVENTS);
  }

  getEventById(id: number): Promise<Event> {
    return this.getEvents()
      .then(result => result.find(event => event.EventId === id));
  }
}
