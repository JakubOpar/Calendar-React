import {
    getMonthName,
    nextMonth,
    previousMonth,
    getToday
} from "../../utils/calendar";

type Props = {
    year: number;
    month: number;
    setYear: (y: number) => void;
    setMonth: (m: number) => void;
};

function CalendarToolbar({ year, month, setYear, setMonth }: Props) {

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

            <button onClick={handlePrev}>‹</button>

            <button onClick={handleToday}>Dziś</button>

            <button onClick={handleNext}>›</button>

            <h2>
                {getMonthName(month)} {year}
            </h2>

        </div>
    );
}

export default CalendarToolbar;