import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ActivityCategoryDetailComponent } from './activity-category-detail/activity-category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    ActivityCategoryDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
