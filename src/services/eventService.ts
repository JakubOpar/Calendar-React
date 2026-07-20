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

        date: new Date(event.date),

        startTime: event.start_time ?? undefined,

        endTime: event.end_time ?? undefined,

        type: event.event_type

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