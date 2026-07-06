import type { CalendarView } from "../../types/calendar";

import "./DayView.css";

type Props = {
    date: Date;
    setView: (v: CalendarView) => void;
};

function DayView({ date, setView }: Props) {

    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
        <div className="day-view">

            <div className="day-view-header">
                <button onClick={() => setView("month")}>
                    Wróć
                </button>

                <h2>
                    {date.toLocaleDateString("pl-PL", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    })}
                </h2>
            </div>

            <div className="day-view-grid">

                {hours.map(hour => (
                    <div key={hour} className="hour-row">
                        <div className="hour-label">
                            {String(hour).padStart(2, "0")}:00
                        </div>

                        <div className="hour-slot"></div>
                    </div>
                ))}

            </div>

        </div>
    );
}

export default DayView;