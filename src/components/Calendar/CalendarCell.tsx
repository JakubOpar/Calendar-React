import type { CalendarDay } from "../../types/calendar";
import type { CalendarEvent } from "../../types/event";

import EventBadge from "../Event/EventBadge";

import "./CalendarCell.css";


type Props = {

    day: CalendarDay;

    events: CalendarEvent[];

    onClick: () => void;

};


function CalendarCell({
    day,
    events,
    onClick
}: Props) {


    const dayEvents = events.filter(event =>

        event.date.getFullYear() === day.date.getFullYear()

        &&

        event.date.getMonth() === day.date.getMonth()

        &&

        event.date.getDate() === day.date.getDate()

    );



    return (

        <div

            onClick={onClick}

            className={`
                calendar-cell

                ${
                    !day.isCurrentMonth
                    ? "calendar-cell--disabled"
                    : ""
                }

                ${
                    day.isToday
                    ? "calendar-cell--today"
                    : ""
                }
            `}

        >

            <span className="calendar-cell-day">

                {day.day}

            </span>



            <div className="calendar-events">


                {
                    dayEvents.map(event => (

                        <EventBadge

                            key={event.id}

                            type={event.type}

                        />

                    ))
                }


            </div>


        </div>

    );

}


export default CalendarCell;