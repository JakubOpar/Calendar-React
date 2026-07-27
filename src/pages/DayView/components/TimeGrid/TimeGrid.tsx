import "./TimeGrid.css";

import TimeAxis from "./components/TimeAxis/TimeAxis";
import DayColumn from "./components/DayColumn/DayColumn";

import type { CalendarEvent } from "../../../../types/event";


type Props = {

    date: Date;

    onEventClick: (
        event: CalendarEvent
    ) => void;

};



function TimeGrid({
    date,
    onEventClick
}: Props) {


    return (

        <div className="time-grid">


            <TimeAxis />


            <DayColumn

                date={date}

                onEventClick={onEventClick}

            />


        </div>

    );

}


export default TimeGrid;