import { invoke } from "@tauri-apps/api/core";

import type { CalendarEvent } from "../types/event";
import type { EventForm } from "../types/eventForm";


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
    event: EventForm
): Promise<void> {

    await invoke(
        "create_event",
        {
            event
        }
    );

}


export async function updateEvent(
    event: CalendarEvent
): Promise<void> {

    await invoke(
        "update_event",
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


export async function deleteEvent(
    id: number
): Promise<void> {

    await invoke(
        "delete_event",
        {
            id
        }
    );

}