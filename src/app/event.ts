import { ActivityCategory } from "./activity-category";



export class Event {
    
    //Event from date and time
    //Event to date and time
    //Entered by username
    //ActivityCategory(FK)
    //CreationDate
    //IsActive
    //EventId
    EventId: number;
    FromDate: Date;
    ToDate: Date;
    EnteredByUsername: string;
    ActivityCategoryId: number;
    ActivityCategory: ActivityCategory;
    CreationDate: Date;
    IsActive: boolean;
}
