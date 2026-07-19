import { invoke } from "@tauri-apps/api/core";

import type { CalendarEvent } from "../types/event";


export async function getEvents(): Promise<CalendarEvent[]> {


    const result = await invoke<any[]>(
        "get_events"
    );


    return result.map(event => ({

        id: event.id,

        title: event.title,

        description: event.description,

        date: new Date(event.date),

        startTime: event.start_time,

        endTime: event.end_time,

        type: event.event_type,

        hasReminder: event.has_reminder,

        reminderDatetime: event.reminder_datetime

    }));

}



export async function createEvent(
    event: CalendarEvent
): Promise<void> {


    await invoke(
        "create_event",
        {
            event: {

                id: event.id,

                title: event.title,

                description: event.description,

                date: event.date
                    .toISOString()
                    .split("T")[0],

                start_time: event.startTime,

                end_time: event.endTime,

                event_type: event.type,

                has_reminder: event.hasReminder,

                reminder_datetime:
                    event.reminderDatetime

            }
        }
    );

}