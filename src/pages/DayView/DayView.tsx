import { useState } from "react";

import type { CalendarView } from "../../types/calendar";
import type { CalendarEvent } from "../../types/event";

import "./DayView.css";

import TimeGrid from "./components/TimeGrid/TimeGrid";
import TaskPanel from "./components/TaskPanel/TaskPanel";
import EventDetailsModal from "./components/EventDetailsModal/EventDetailsModal";


type Props = {
    date: Date;
    setView: (view: CalendarView) => void;
};



function DayView({
    date,
    setView
}: Props) {


    const [selectedEvent, setSelectedEvent] =
        useState<CalendarEvent | null>(null);



    return (

        <main className="day-view">


            <header className="day-view-header">


                <button
                    onClick={() => setView("month")}
                >
                    Wróć
                </button>



                <h2>

                    {date.toLocaleDateString("pl-PL", {

                        weekday: "long",

                        year: "numeric",

                        month: "long",

                        day: "numeric"

                    })}

                </h2>


            </header>



            <section className="day-view-content">


                <TimeGrid
                    date={date}
                    onEventClick={setSelectedEvent}
                />


                <TaskPanel />


            </section>




            {
                selectedEvent && (

                    <EventDetailsModal

                        event={selectedEvent}

                        onClose={() =>
                            setSelectedEvent(null)
                        }

                    />

                )
            }



        </main>

    );

}


export default DayView;