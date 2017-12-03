import { TestBed, inject } from '@angular/core/testing';

import { ActivityCategoryService } from './activity-category.service';

describe('ActivityCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityCategoryService]
    });
  });

  it('should be created', inject([ActivityCategoryService], (service: ActivityCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
