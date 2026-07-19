import "./DayColumn.css";

import TimeSegment from "./TimeSegment/TimeSegment";
import EventsLayer from "./EventsLayer/EventsLayer";


function DayColumn(){

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


            <EventsLayer />


        </div>

    );

}


export default DayColumn;