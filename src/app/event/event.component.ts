import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
import {ActivityCategory} from '../activity-category';
import {ActivityCategoryService} from '../activity-category.service'



//import {DUMMY_DATA_EVENTS, DUMMY_DATA_ACTIVITY_CATEGORIES} from './data/dummy-data'; 

@Component({
  selector: 'event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {
  title = 'Zenith Society';
  //events = DUMMY_DATA_EVENTS;
  //activityCategories = DUMMY_DATA_ACTIVITY_CATEGORIES;
  events: Event[]
  activityCategories: ActivityCategory[]

  selected: Event;

  onSelect(event: Event): void {
    this.selected= event;
  }

  constructor(private eventService: EventService, private activityCategoryService: ActivityCategoryService) { } 
  
  getEvents(): void {
    this.eventService.getEvents()
    .then(events => this.events = events);
  }

  getActivityCategories(): void {
    this.activityCategoryService.getActivityCategories()
    .then(activityCategories => this.activityCategories = activityCategories);
  }



  ngOnInit(): void {
    this.getEvents();
    this.getActivityCategories();
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
