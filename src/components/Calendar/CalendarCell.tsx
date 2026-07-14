import type { CalendarDay } from "../../types/calendar";

import EventBadge from "../Event/EventBadge";

import { getEventsForDate } from "../../services/events";

import "./CalendarCell.css";


type Props = {

    day: CalendarDay;

    onClick: () => void;

};


function CalendarCell({ day, onClick }: Props) {


    const dayEvents = getEventsForDate(day.date);


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