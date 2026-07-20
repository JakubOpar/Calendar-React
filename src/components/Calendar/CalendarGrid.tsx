import CalendarCell from "./CalendarCell";

import { getWeekdayNames } from "../../utils/calendar";

import {
    useEvents
} from "../../context/EventContext";

import type { CalendarWeek } from "../../types/calendar";

import "./CalendarGrid.css";


type Props = {

    matrix: CalendarWeek[];

    onDayClick: (date: Date) => void;

};



function CalendarGrid({
    matrix,
    onDayClick
}: Props) {


    const weekDays =
        getWeekdayNames();


    const {
        events
    } = useEvents();



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
                            week.map((day,j)=>{


                                const dayEvents =
                                    events.filter(event =>

                                        event.date.getFullYear()
                                            === day.date.getFullYear()

                                        &&

                                        event.date.getMonth()
                                            === day.date.getMonth()

                                        &&

                                        event.date.getDate()
                                            === day.date.getDate()

                                    );



                                return (

                                    <CalendarCell

                                        key={j}

                                        day={day}

                                        events={dayEvents}

                                        onClick={() =>
                                            onDayClick(day.date)
                                        }

                                    />

                                );

                            })
                        }


                    </div>

                ))
            }


        </div>

    );

}


export default CalendarGrid;