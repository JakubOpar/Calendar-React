import type { CalendarDay } from "../../types/calendar";
import "./CalendarCell.css";

type Props = {
    day: CalendarDay;
    onClick: () => void;
};

function CalendarCell({ day, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className={`calendar-cell ${
                day.isCurrentMonth ? "" : "calendar-cell--disabled"
            } ${
                day.isToday ? "calendar-cell--today" : ""
            }`}
        >
            <span>{day.day}</span>
        </div>
    );
}

export default CalendarCell;