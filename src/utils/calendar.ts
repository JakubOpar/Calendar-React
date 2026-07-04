import type { CalendarWeek } from "../types/calendar";

export function isLeapYear(year: number): boolean {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

export function getWeekday(date: Date): number {
    return (date.getDay() + 6) % 7;
}

export function isToday(date: Date): boolean {
    const today = new Date();

    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
}

export function getMonthMatrix(
    year: number,
    month: number
): CalendarWeek[] {

    const weeks: CalendarWeek[] = [];

    const firstDay = new Date(year, month, 1);

    const startOffset = getWeekday(firstDay);

    const startDate = new Date(firstDay);

    startDate.setDate(firstDay.getDate() - startOffset);

    for (let week = 0; week < 6; week++) {

        const currentWeek: CalendarWeek = [];

        for (let day = 0; day < 7; day++) {

            const current = new Date(startDate);

            current.setDate(startDate.getDate() + week * 7 + day);

            currentWeek.push({

                date: current,

                day: current.getDate(),

                month: current.getMonth(),

                year: current.getFullYear(),

                isCurrentMonth: current.getMonth() === month,

                isToday: isToday(current)

            });

        }

        weeks.push(currentWeek);

    }

    return weeks;

}

export function getMonthName(month: number, locale: string = "pl-PL"): string {
    const date = new Date(2000, month, 1);

    return new Intl.DateTimeFormat(locale, { month: "long" }).format(date);
}

export function getWeekdayNames(locale: string = "pl-PL"): string[] {
    const baseDate = new Date(2024, 0, 1); // poniedziałek

    const formatter = new Intl.DateTimeFormat(locale, { weekday: "short" });

    return Array.from({ length: 7 }).map((_, i) => {
        const date = new Date(baseDate);
        date.setDate(baseDate.getDate() + i);
        return formatter.format(date);
    });
}

export function nextMonth(year: number, month: number) {
    const date = new Date(year, month + 1, 1);

    return {
        year: date.getFullYear(),
        month: date.getMonth()
    };
}

export function previousMonth(year: number, month: number) {
    const date = new Date(year, month - 1, 1);

    return {
        year: date.getFullYear(),
        month: date.getMonth()
    };
}

export function getToday() {
    const now = new Date();

    return {
        year: now.getFullYear(),
        month: now.getMonth()
    };
}