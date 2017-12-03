import { ActivityCategory } from "./activity-category";



export class Event {
    
    //Event from date and time
    //Event to date and time
    //Entered by username
    //ActivityCategory(FK)
    //CreationDate
    //IsActive
    //EventId
    eventId: number;
    fromDate: Date;
    toDate: Date;
    enteredByUsername: string;
    activityCategoryId: number;
    activityCategory: ActivityCategory;
    creationDate: Date;
    isActive: boolean;
}
