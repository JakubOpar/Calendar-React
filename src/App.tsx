import { useState } from "react";

import Header from "./components/Header/Header";

import MonthView from "./pages/MonthView/MonthView";
import DayView from "./pages/DayView/DayView";

import type { CalendarView } from "./types/calendar";


function App() {


    const [view, setView] =
        useState<CalendarView>("month");


    const [selectedDate, setSelectedDate] =
        useState<Date>(new Date());



    return (

        <div className="app">


            <Header />


            {view === "month" && (

                <MonthView

                    setView={setView}

                    setSelectedDate={setSelectedDate}

                />

            )}



            {view === "day" && (

                <DayView

                    date={selectedDate}

                    setView={setView}

                />

            )}


        </div>

    );

}


export default App;