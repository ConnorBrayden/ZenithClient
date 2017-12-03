import { Component } from '@angular/core';
import { EventService } from './event.service';
import { ActivityCategoryService } from './activity-category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService, ActivityCategoryService]
})

export class AppComponent {
  title = 'Zenith Society';
}
