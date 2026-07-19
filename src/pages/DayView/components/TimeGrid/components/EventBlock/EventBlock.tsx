import type { CSSProperties } from "react";

import type { CalendarEvent } from "../../../../../../types/event";

import {
    timeToPosition,
    eventHeight
} from "../../../../../../utils/time";

import "./EventBlock.css";


type Props = {
    event: CalendarEvent;
};


const eventTypeNames: Record<string, string> = {

    work: "Praca",

    meeting: "Spotkanie",

    personal: "Prywatne"

};


function EventBlock({ event }: Props) {


    const top = event.startTime
        ? timeToPosition(event.startTime)
        : 0;


    const height =
        event.startTime && event.endTime
            ? eventHeight(
                event.startTime,
                event.endTime
            )
            : 40;


    const style: CSSProperties = {

        top: `${top}px`,

        height: `${height}px`

    };


    return (

        <div
            className={
                `event-block event-block--${event.type}`
            }
            style={style}
        >

            <div className="event-block__type">

                {eventTypeNames[event.type]}

            </div>


            <div className="event-block__title">

                {event.title}

            </div>


            {
                event.startTime &&
                event.endTime &&
                (
                    <div className="event-block__time">

                        {event.startTime}
                        {" - "}
                        {event.endTime}

                    </div>
                )
            }

        </div>

    );

}


export default EventBlock;