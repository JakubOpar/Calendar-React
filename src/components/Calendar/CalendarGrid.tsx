import { useEffect, useState } from "react";

import CalendarCell from "./CalendarCell";
import { getWeekdayNames } from "../../utils/calendar";

import {
    getEvents
} from "../../services/eventService";

import type { CalendarWeek } from "../../types/calendar";
import type { CalendarEvent } from "../../types/event";

import "./CalendarGrid.css";


type Props = {
    matrix: CalendarWeek[];
    onDayClick: (date: Date) => void;
};



function CalendarGrid({
    matrix,
    onDayClick
}: Props) {


    const weekDays = getWeekdayNames();


    const [events, setEvents] =
        useState<CalendarEvent[]>([]);



    useEffect(() => {

        getEvents()
            .then(data => {

                console.log(
                    "Events from database:",
                    data
                );

                setEvents(data);

            })
            .catch(error => {

                console.error(
                    "Cannot load events:",
                    error
                );

            });


    }, []);



    return (

        <div className="calendar-grid">


            {/* HEADER */}

            <div className="calendar-header">

                {
                    weekDays.map((day,i)=>(

                        <div
                            key={i}
                            className="calendar-header-cell"
                        >
                            {day}
                        </div>

                    ))
                }

            </div>



            {/* GRID */}

            {
                matrix.map((week,i)=>(

                    <div
                        key={i}
                        className="calendar-row"
                    >

                        {
                            week.map((day,j)=>(

                                <CalendarCell

                                    key={j}

                                    day={day}

                                    events={events}

                                    onClick={() =>
                                        onDayClick(day.date)
                                    }

                                />

                            ))
                        }


                    </div>

                ))
            }


        </div>

    );

}


export default CalendarGrid;