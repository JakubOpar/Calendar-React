export type EventType =
    | "work"
    | "meeting"
    | "personal";


export type CalendarEvent = {

    id: number;

    date: Date;

    title: string;

    description?: string;

    type: EventType;

    startTime?: string;

    endTime?: string;

    hasReminder: boolean;

    reminderDatetime?: string;

};