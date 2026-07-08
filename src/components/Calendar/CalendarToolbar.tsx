import {
    getMonthName,
    nextMonth,
    previousMonth,
    getToday
} from "../../utils/calendar";

import "./CalendarToolbar.css";

type Props = {
    year: number;
    month: number;
    setYear: (year: number) => void;
    setMonth: (month: number) => void;

    onAddClick: () => void;
};

function CalendarToolbar({ year, month, setYear, setMonth, onAddClick }: Props) {

    function handlePrev() {
        const result = previousMonth(year, month);
        setYear(result.year);
        setMonth(result.month);
    }

    function handleNext() {
        const result = nextMonth(year, month);
        setYear(result.year);
        setMonth(result.month);
    }

    function handleToday() {
        const today = getToday();
        setYear(today.year);
        setMonth(today.month);
    }

    return (
        <div className="calendar-toolbar">

            <button onClick={handlePrev}>Poprzedni</button>

            <button onClick={handleToday}>Dzisiaj</button>

            <button onClick={handleNext}>Następny</button>

            <button
                className="calendar-toolbar__add-button"
                onClick={onAddClick}
            >
                +
            </button>

            <h2>
                {getMonthName(month)} {year}
            </h2>

        </div>
    );
}

export default CalendarToolbar;