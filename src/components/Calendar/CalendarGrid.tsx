import CalendarCell from "./CalendarCell";
import { getWeekdayNames } from "../../utils/calendar";

import type { CalendarWeek } from "../../types/calendar";
import "./CalendarGrid.css";

type Props = {
    matrix: CalendarWeek[];
    onDayClick: (date: Date) => void;
};

function CalendarGrid({ matrix, onDayClick }: Props) {
    const weekDays = getWeekdayNames();

    return (
        <div className="calendar-grid">

            {/* HEADER */}
            <div className="calendar-header">
                {weekDays.map((day, i) => (
                    <div key={i} className="calendar-header-cell">
                        {day}
                    </div>
                ))}
            </div>

            {/* GRID */}
            {matrix.map((week, i) => (
                <div key={i} className="calendar-row">
                    {week.map((day, j) => (

                        <CalendarCell

                            key={j}

                            day={day}

                            onClick={() => onDayClick(day.date)}

                        />

                    ))}
                </div>
            ))}

        </div>
    );
}

export default CalendarGrid;