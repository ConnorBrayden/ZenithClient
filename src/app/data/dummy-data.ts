import {Event} from '../event';
import {ActivityCategory} from '../activity-category'


export const DUMMY_DATA_EVENTS: Event[] = [
  {"eventId":1,"fromDate":new Date("2017-10-18T08:30:00"),"toDate":new Date("2017-10-18T10:30:00"),"enteredByUsername":"b","activityCategoryId":3,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":2,"fromDate":new Date("2017-10-20T17:30:00"),"toDate":new Date("2017-10-20T19:15:00"),"enteredByUsername":"a","activityCategoryId":3,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":3,"fromDate":new Date("2017-10-20T19:00:00"),"toDate":new Date("2017-10-20T20:00:00"),"enteredByUsername":"a","activityCategoryId":4,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":4,"fromDate":new Date("2017-10-21T08:30:00"),"toDate":new Date("2017-10-21T10:30:00"),"enteredByUsername":"a","activityCategoryId":5,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":5,"fromDate":new Date("2017-10-21T10:30:00"),"toDate":new Date("2017-10-21T12:00:00"),"enteredByUsername":"a","activityCategoryId":6,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":6,"fromDate":new Date("2017-10-22T08:30:00"),"toDate":new Date("2017-10-22T10:30:00"),"enteredByUsername":"a","activityCategoryId":9,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":7,"fromDate":new Date("2017-10-22T07:30:00"),"toDate":new Date("2017-10-22T08:30:00"),"enteredByUsername":"a","activityCategoryId":8,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":8,"fromDate":new Date("2017-10-22T08:30:00"),"toDate":new Date("2017-10-22T10:30:00"),"enteredByUsername":"a","activityCategoryId":10,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":9,"fromDate":new Date("2017-10-22T10:30:00"),"toDate":new Date("2017-10-22T12:00:00"),"enteredByUsername":"a","activityCategoryId":11,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
  {"eventId":10,"fromDate":new Date("2017-10-17T08:30:00"),"toDate":new Date("2017-10-17T10:30:00"),"enteredByUsername":"a","activityCategoryId":1,"activityCategory":null,"creationDate":new Date("2017-09-17T10:30:00"),"isActive":true},
]


export const DUMMY_DATA_ACTIVITY_CATEGORIES: ActivityCategory[] = [
  {"activityCategoryId":1,"activityDescription":"Senior's Golf Tournament","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":2,"activityDescription":"Leadership General Assembly Meeting","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":3,"activityDescription":"Youth Bowling Tournament","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":4,"activityDescription":"Young Ladies Cooking Lessons","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":5,"activityDescription":"Youth Craft Lessons","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":6,"activityDescription":"Youth Choir Practice","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":7,"activityDescription":"Lunch","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":8,"activityDescription":"Pancake Breakfast","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":9,"activityDescription":"Swimming Lessons for Youth","creationDate":new Date("2017-09-17T10:30:00")},
  {"activityCategoryId":10,"activityDescription":"Swimming Exercise for Parents","creationDate":new Date("2017-09-17T10:30:00")},
]
