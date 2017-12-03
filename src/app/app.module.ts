import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ActivityCategoryComponent } from './activity-category/activity-category.component';
import { ActivityCategoryDetailComponent } from './activity-category-detail/activity-category-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component'; 

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'; 


@NgModule({
  declarations: [
    AppComponent,
    EventDetailComponent,
    ActivityCategoryDetailComponent,
    EventComponent,
    ActivityCategoryComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
