import { useState } from "react";

import "./MonthView.css";

import CalendarToolbar from "../../components/Calendar/CalendarToolbar";
import CalendarGrid from "../../components/Calendar/CalendarGrid";

import {
    getMonthMatrix,
    getToday
} from "../../utils/calendar";

import type { CalendarView } from "../../types/calendar";

type Props = {
    setView: (view: CalendarView) => void;
    setSelectedDate: (date: Date) => void;
};

function MonthView({ setView, setSelectedDate }: Props) {

    const today = getToday();

    const [year, setYear] = useState(today.year);
    const [month, setMonth] = useState(today.month);

    const matrix = getMonthMatrix(year, month);

    function handleDayClick(date: Date) {
        setSelectedDate(date);
        setView("day");
    }

    return (
        <main className="month-view">

            <CalendarToolbar
                year={year}
                month={month}
                setYear={setYear}
                setMonth={setMonth}
            />

            <CalendarGrid
                matrix={matrix}
                onDayClick={handleDayClick}
            />

        </main>
    );
}

export default MonthView;