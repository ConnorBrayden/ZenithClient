import { Injectable } from '@angular/core';
import {DUMMY_DATA_ACTIVITY_CATEGORIES} from './data/dummy-data';
import { ActivityCategory } from './activity-category';

@Injectable()
export class ActivityCategoryService {

  constructor() { }


  getActivityCategories(): ActivityCategory[] {   
    return DUMMY_DATA_ACTIVITY_CATEGORIES;
  }

}
