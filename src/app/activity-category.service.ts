import { Injectable } from '@angular/core';
import {DUMMY_DATA_ACTIVITY_CATEGORIES} from './data/dummy-data';
import { ActivityCategory } from './activity-category';

@Injectable()
export class ActivityCategoryService {

  constructor() { }

  getActivityCategories(): Promise<ActivityCategory[]> {   
    return Promise.resolve(DUMMY_DATA_ACTIVITY_CATEGORIES);
  }
}
