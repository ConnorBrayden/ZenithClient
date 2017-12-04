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
  startDate: Date;
  dates: string[];

  constructor(private eventService: EventService, private activityCategoryService: ActivityCategoryService) { } 

  ngOnInit() {
    this.startDate = this.getMonday(new Date()); 
    var dateString = this.formatDate(this.startDate);
    //this.getDatesOfWeek(this.startDate);
    
    this.eventService.getEvents(dateString)
      .then(results => this.events = results);

    this.activityCategoryService.getActivityCategories()
    .then(results => this.activityCategories = results);

  }

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

  // getDatesOfWeek(monday: Date) {
  //   var dateStrings: string[];
  //   var length = 7;

  //   for(var i = 0; i < length; i++) {
  //     var tempDate = new Date(monday);
  //     var day = tempDate.getDay();
  //     var diff = tempDate.getDate() - day + i;

  //     var d = new Date(tempDate.setDate(diff));


  //     dateStrings.push(d.toDateString()); 
  //     console.log(tempDate.toDateString());
  //   }
  //   //this.dates.fill(monday.toString(), monday.getDate()+7);
  //   console.log(this.dates);
  // }

  previousWeek() {
    this.startDate.setDate(this.startDate.getDate() - 7); 
    var dateString = this.formatDate(this.startDate);
    this.eventService.getEvents(dateString)
    .then(results => this.events = results);

  }

  nextWeek() {
    this.startDate.setDate(this.startDate.getDate() + 7); 
    var dateString = this.formatDate(this.startDate);
    this.eventService.getEvents(dateString)
    .then(results => this.events = results);
  }
}
