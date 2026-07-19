import "./EventsLayer.css";

import { events } from "../../../../../../../services/events";

import EventBlock from "../../EventBlock/EventBlock";


function EventsLayer() {


    const timedEvents = events.filter(
        event =>
            event.startTime !== undefined &&
            event.endTime !== undefined
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