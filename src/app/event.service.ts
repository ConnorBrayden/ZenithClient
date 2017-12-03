import { Injectable } from '@angular/core';
import {DUMMY_DATA_EVENTS} from './data/dummy-data';
import {Event} from './event'

@Injectable()
export class EventService {

  constructor() { }

  getEvents(): Event[] {   
    return DUMMY_DATA_EVENTS;
  }

}
