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


    const today = new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );


    const currentDate =
        new Date(day.date);

    currentDate.setHours(
        0,
        0,
        0,
        0
    );


    const isPast =
        currentDate < today
        &&
        day.isCurrentMonth;



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

                ${
                    isPast
                    ? "calendar-cell--past"
                    : ""
                }
            `}

        >


            <span className="calendar-cell-day">

                {day.day}

            </span>



            <div className="calendar-events">


                {
                    events.map(event => (

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