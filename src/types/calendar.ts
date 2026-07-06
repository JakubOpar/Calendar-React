export interface CalendarDay {
    date: Date;
    day: number;
    month: number;
    year: number;

    isCurrentMonth: boolean;
    isToday: boolean;
}

export type CalendarWeek = CalendarDay[];
export type CalendarView = "month" | "day";