import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ActivityCategoryDetailComponent } from './activity-category-detail/activity-category-detail.component';
import { EventComponent } from './event/event.component';
import { ActivityCategoryComponent } from './activity-category/activity-category.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    ActivityCategoryDetailComponent,
    EventComponent,
    ActivityCategoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
