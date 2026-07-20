import { useState } from "react";

import { invoke } from "@tauri-apps/api/core";

import Header from "./components/Header/Header";

import MonthView from "./pages/MonthView/MonthView";
import DayView from "./pages/DayView/DayView";

import type { CalendarView } from "./types/calendar";

import {
    useEvents
} from "./context/EventContext";



function App() {


    const [view, setView] =
        useState<CalendarView>("month");


    const [selectedDate, setSelectedDate] =
        useState<Date>(new Date());



    const {
        refreshEvents
    } = useEvents();




    async function handleTestInsert() {


        try {


            await invoke(
                "test_insert"
            );



            await refreshEvents();



            console.log(
                "Testowy event dodany i odświeżony"
            );



        } catch(error) {


            console.error(
                "Błąd dodawania eventu:",
                error
            );


        }


    }





    return (

        <div className="app">


            <Header />



            <button
                onClick={handleTestInsert}
            >
                Dodaj testowy event
            </button>





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