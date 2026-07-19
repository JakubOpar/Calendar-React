import { useEffect, useState } from "react";

import "./EventsLayer.css";

import EventBlock from "../../EventBlock/EventBlock";

import {
    getEvents
} from "../../../../../../../services/eventService";

import type { CalendarEvent } from "../../../../../../../types/event";


function EventsLayer() {


    const [events, setEvents] =
        useState<CalendarEvent[]>([]);



    useEffect(() => {

        getEvents()
            .then(setEvents)
            .catch(console.error);

    }, []);



    const timedEvents = events.filter(
        event =>
            event.startTime &&
            event.endTime
    );



    return (

        <div className="events-layer">

            {
                timedEvents.map(event => (

                    <EventBlock
                        key={event.id}
                        event={event}
                    />

                ))
            }

        </div>

    );

}


export default EventsLayer;