import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ActivityCategoryDetailComponent } from './activity-category-detail/activity-category-detail.component';
import { EventComponent } from './event/event.component';
import { ActivityCategoryComponent } from './activity-category/activity-category.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
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
    // RouterModule.forRoot([
    //   {
    //     path: 'events',
    //     component: EventComponent
    //   },
    //   {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //   },
    //   {
    //     path: 'detail/:id',
    //     component: EventDetailComponent
    //   },
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
