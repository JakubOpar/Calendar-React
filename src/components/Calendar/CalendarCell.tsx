import type { CalendarDay } from "../../types/calendar";

type Props = {
    day: CalendarDay;
};

function CalendarCell({ day }: Props) {
    return (
        <div
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