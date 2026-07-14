import type { CalendarEvent } from "../../../../types/event";

import {
    timeToPosition,
    eventHeight
} from "../../../../utils/time";

import "./EventBlock.css";


type Props = {
    event: CalendarEvent;
};


const eventTypeNames = {
    work: "Praca",
    meeting: "Spotkanie",
    personal: "Prywatne"
};


function EventBlock({ event }: Props) {


    const top = event.startTime
        ? timeToPosition(event.startTime)
        : 0;


    const height =
        event.startTime &&
        event.endTime
        ?
        eventHeight(
            event.startTime,
            event.endTime
        )
        :
        20;



    return (

        <div

            className={`event-block event-block--${event.type}`}


            style={{
                top,
                height
            }}

        >

            <span className="event-block__type">

                {eventTypeNames[event.type]}

            </span>


            <strong className="event-block__title">

                {event.title}

            </strong>


            <span className="event-block__time">

                {event.startTime}
                {" - "}
                {event.endTime}

            </span>


        </div>

    );

}


export default EventBlock;