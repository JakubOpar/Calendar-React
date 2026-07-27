import "./EventsLayer.css";

import EventBlock from "../../EventBlock/EventBlock";

import {
    useEvents
} from "../../../../../../../context/EventContext";

import type { CalendarEvent } from "../../../../../../../types/event";


type Props = {

    date: Date;

    onEventClick: (
        event: CalendarEvent
    ) => void;

};



function EventsLayer({
    date,
    onEventClick
}: Props) {


    const {
        events
    } = useEvents();



    const dayEvents = events.filter(event =>

        event.date.getFullYear()
            === date.getFullYear()

        &&

        event.date.getMonth()
            === date.getMonth()

        &&

        event.date.getDate()
            === date.getDate()

    );



    const timedEvents =
        dayEvents.filter(event =>
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

                        onClick={() =>
                            onEventClick(event)
                        }

                    />

                ))
            }


        </div>

    );

}


export default EventsLayer;