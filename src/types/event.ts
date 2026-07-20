export type CalendarEvent = {

    id:number;

    date:Date;

    title:string;

    type:
        | "work"
        | "meeting"
        | "personal";

    startTime?:string;

    endTime?:string;

};