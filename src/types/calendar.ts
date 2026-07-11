export type CalendarDay = {
    date: Date;
    day: number;
    month: number;
    year: number;

    isCurrentMonth: boolean;
    isToday: boolean;

    isPast: boolean;
    isFuture: boolean;
};

export type CalendarWeek = CalendarDay[];
export type CalendarView = "month" | "day";