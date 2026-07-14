import TimeSegment from "./components/TimeSegment/TimeSegment";

import EventBlock from "../EventBlock/EventBlock";

import { events } from "../../../../services/events";

import "./TimeGrid.css";


function TimeGrid() {


    const segments = Array.from(
        { length:96 },
        (_,index)=>index
    );



    return (

        <div className="time-grid">


            {
                segments.map(segment=>(

                    <TimeSegment

                        key={segment}

                        index={segment}

                    />

                ))
            }



            {
                events
                .filter(event => event.startTime && event.endTime)
                .map(event=>(

                    <EventBlock

                        key={event.id}

                        event={event}

                    />

                ))
            }


        </div>

    );

}


export default TimeGrid;