import { useState } from "react";

import "./MonthView.css";

import CalendarToolbar from "../../components/Calendar/CalendarToolbar";
import CalendarGrid from "../../components/Calendar/CalendarGrid";
import EventDialog from "../../components/Event/EventDialog";

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
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const matrix = getMonthMatrix(year, month);

    function handleDayClick(date: Date) {
        setSelectedDate(date);
        setView("day");
    }

    function handleAddClick() {
        setIsDialogOpen(true);
    }

    function handleCloseDialog() {
        setIsDialogOpen(false);
    }

    return (
        <main className="month-view">

            <CalendarToolbar
                year={year}
                month={month}
                setYear={setYear}
                setMonth={setMonth}
                onAddClick={handleAddClick}
            />

            <CalendarGrid
                matrix={matrix}
                onDayClick={handleDayClick}
            />

            {isDialogOpen && (
                <EventDialog
                    open={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}

        </main>
    );
}

export default MonthView;