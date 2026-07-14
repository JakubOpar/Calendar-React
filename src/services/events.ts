import type { CalendarEvent } from "../types/event";

export const events: CalendarEvent[] = [

    {
        id: 1,
        date: new Date(2026, 6, 14),
        title: "Praca nad projektem",
        type: "work",
        startTime: "08:30",
        endTime: "11:00"
    },


    {
        id: 2,
        date: new Date(2026, 6, 14),
        title: "Spotkanie zespołu",
        type: "meeting",
        startTime: "14:00",
        endTime: "15:30"
    }

];

export function getEventsForDate(date: Date) {

    return events.filter(event =>

        event.date.getFullYear() === date.getFullYear()
        &&
        event.date.getMonth() === date.getMonth()
        &&
        event.date.getDate() === date.getDate()

    );

}