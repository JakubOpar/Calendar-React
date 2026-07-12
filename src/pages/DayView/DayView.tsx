import type { CalendarView } from "../../types/calendar";

import "./DayView.css";

import TimeGrid from "./components/TimeGrid/TimeGrid";
import TaskPanel from "./components/TaskPanel/TaskPanel";

type Props = {
    date: Date;
    setView: (view: CalendarView) => void;
};

function DayView({ date, setView }: Props) {
    return (
        <main className="day-view">

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

            <div className="day-view-content">

                <TimeGrid />

                <TaskPanel />

            </div>

        </main>
    );
}

export default DayView;