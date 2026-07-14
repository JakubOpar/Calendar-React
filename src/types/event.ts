export type EventType =
    | "work"
    | "meeting"
    | "personal";


export type CalendarEvent = {

    id: number;

    date: Date;

    title: string;

    type: EventType;

    startTime?: string;

    endTime?: string;

};