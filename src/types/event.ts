export type CalendarEvent = {

    id:number;

    title:string;

    description?:string;

    date:Date;

    type:
        | "work"
        | "meeting"
        | "personal";

    startTime?:string;

    endTime?:string;

    hasReminder:boolean;

    reminderDatetime?:string;

};