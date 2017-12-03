import { Component } from '@angular/core';
import {Event} from './event';
import {ActivityCategory} from './activity-category'
import {DUMMY_DATA_EVENTS, DUMMY_DATA_ACTIVITY_CATEGORIES} from './data/dummy-data'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  events = DUMMY_DATA_EVENTS;
  activityCategories = DUMMY_DATA_ACTIVITY_CATEGORIES;

  selected: Event;

  onSelect(event: Event): void {
    this.selected= event;
}

  // event: Event = {
  //   EventId: 1,
  //   FromDate: new Date("2017-10-18T08:30:00"),
  //   ToDate: new Date("2017-10-18T10:30:00"),
  //   EnteredByUsername: "b",
  //   ActivityCategoryId: 3,
  //   ActivityCategory: null,
  //   CreationDate: new Date("2017-09-17T10:30:00"),
  //   IsActive: true,
  // };

  // activityCategory: ActivityCategory = {
  //   ActivityCategoryId: 1,
  //   ActivityDescription: "Senior's Golf Tournament",
  //   CreationDate: new Date("2017-09-17T10:30:00"),
  // }
}
