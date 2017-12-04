import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {EventService} from '../event.service';
import {ActivityCategory} from '../activity-category';
import {ActivityCategoryService} from '../activity-category.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  events: Event[];
  activityCategories: ActivityCategory[];

  constructor(private eventService: EventService, private activityCategoryService: ActivityCategoryService) { } 

  ngOnInit() {
    this.eventService.getEvents()
      .then(results => this.events = results);

    this.activityCategoryService.getActivityCategories()
    .then(results => this.activityCategories = results);

  }

  previousWeek() {

  }

  nextWeek() {
    
  }
}
