export type EventForm = {

    title: string;

    description?: string;

    date: string;

    start_time?: string;

    end_time?: string;

    event_type:
        | "work"
        | "meeting"
        | "personal";

    has_reminder: boolean;

    reminder_datetime?: string;

};