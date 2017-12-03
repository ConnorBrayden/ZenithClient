import { Component, OnInit } from '@angular/core';
import {ActivityCategory} from '../activity-category';
import {ActivityCategoryService} from '../activity-category.service'

@Component({
  selector: 'activity-category-component',
  templateUrl: './activity-category.component.html',
  styleUrls: ['./activity-category.component.css']
})


export class ActivityCategoryComponent implements OnInit {

  title = 'Zenith Society';
  activityCategories: ActivityCategory[]
  selected: ActivityCategory;
  
  constructor(private activityCategoryService: ActivityCategoryService) { }

  getActivityCategories(): void {
    this.activityCategoryService.getActivityCategories()
    .then(activityCategories => this.activityCategories = activityCategories);
    console.log(this.activityCategories);
  }

  onSelect(activityCategory: ActivityCategory): void {
    this.selected= activityCategory;
  }

  ngOnInit() {
    this.getActivityCategories();
  }

}

