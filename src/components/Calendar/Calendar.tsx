import { useState } from "react";

import { getMonthMatrix, getToday } from "../../utils/calendar";

import CalendarToolbar from "./CalendarToolbar";
import CalendarGrid from "./CalendarGrid";

import "./Calendar.css";

function Calendar() {
    const today = getToday();

    const [year, setYear] = useState(today.year);
    const [month, setMonth] = useState(today.month);

    const matrix = getMonthMatrix(year, month);

    return (
        <div className="calendar">
            <CalendarToolbar
                year={year}
                month={month}
                setYear={setYear}
                setMonth={setMonth}
            />

            <CalendarGrid matrix={matrix} />
        </div>
    );
}

export default Calendar;