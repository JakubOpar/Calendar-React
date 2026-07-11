import type { CalendarDay } from "../../types/calendar";

import "./CalendarCell.css";

type Props = {
    day: CalendarDay;
    onClick: () => void;
};

function CalendarCell({ day, onClick }: Props) {

    const classNames = [
        "calendar-cell",

        !day.isCurrentMonth && "calendar-cell--disabled",

        day.isToday && "calendar-cell--today",

        day.isPast &&
            day.isCurrentMonth &&
            !day.isToday &&
            "calendar-cell--past",

        day.isFuture &&
            day.isCurrentMonth &&
            "calendar-cell--future"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <div
            className={classNames}
            onClick={onClick}
        >
            <span>{day.day}</span>
        </div>
    );
}

export default CalendarCell;