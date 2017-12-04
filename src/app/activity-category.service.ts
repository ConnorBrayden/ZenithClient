import { Injectable } from '@angular/core';
import {DUMMY_DATA_ACTIVITY_CATEGORIES} from './data/dummy-data';
import { ActivityCategory } from './activity-category';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityCategoryService {

  private BASE_URL = "http://localhost:10473/api/ActivityCategories"

  constructor(private http: Http) { }

  getActivityCategories(): Promise<ActivityCategory[]> { 
    return this.http.get(this.BASE_URL)
     .toPromise()
     .then(response => response.json() as ActivityCategory[])
     .catch(this.handleError);
  }

  getActivityCategoryById(id: number): Promise<ActivityCategory> {
    return this.getActivityCategories()
      .then(result => result.find(activityCategory => activityCategory.activityCategoryId === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  update(activityCategory: ActivityCategory): Promise<ActivityCategory> {
    const url = `${this.BASE_URL}/${activityCategory.activityCategoryId}`;
    return this.http
      .put(url, JSON.stringify(activityCategory), {headers: this.headers})
      .toPromise()
      .then(() => activityCategory)
      .catch(this.handleError);
  }
}
