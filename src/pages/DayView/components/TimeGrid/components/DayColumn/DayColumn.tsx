import "./DayColumn.css";

import TimeSegment from "./TimeSegment/TimeSegment";
import EventsLayer from "./EventsLayer/EventsLayer";

import type { CalendarEvent } from "@/types/event";


type Props = {

    date: Date;

    onEventClick: (
        event: CalendarEvent
    ) => void;

};



function DayColumn({
    date,
    onEventClick
}: Props) {


    const segments = Array.from(
        { length: 24 * 4 },
        (_, index) => index
    );


    return (

        <div className="day-column">


            <div className="day-lines">

                {
                    segments.map(segment => (

                        <TimeSegment

                            key={segment}

                            index={segment}

                        />

                    ))
                }

            </div>



            <EventsLayer

                date={date}

                onEventClick={onEventClick}

            />


        </div>

    );

}


export default DayColumn;