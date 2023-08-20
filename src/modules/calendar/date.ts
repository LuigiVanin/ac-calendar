import moment from "moment";
import { StringDateFormat } from "./types";
import { CalendarUnit } from "./calendarUnit";
import { Birthday } from "./birthday";
import { birthdays } from "./data";

export class Day extends CalendarUnit {
    birthdays: Birthday[] = [];

    constructor(date: StringDateFormat) {
        super(date);
        this.birthdays = [];
        birthdays.forEach((b) => {
            if (
                b.getDay() === this.getDay() &&
                b.getMonth() === this.getMonth()
            ) {
                this.birthdays.push(b);
            }
        });
    }

    addBirthday(birthday: Birthday) {
        this.birthdays.push(birthday);
    }

    getCurrentDiffDays(day?: Date) {
        const today = day || new Date();
        const date1 = moment(today);
        return date1.diff(this.date, "days");
    }

    getBirthdays() {
        return this.birthdays;
    }
}

const leftPad = (num: number, size: number) => {
    const s = String(num);
    return s.padStart(size, "0");
};

export class Month extends CalendarUnit {
    days: Day[] = [];

    constructor(month: number, year: number) {
        const formattedDate: StringDateFormat = `${year}-${leftPad(
            month,
            2
        )}-01`;
        super(formattedDate);
        const date = moment(formattedDate);

        const daysInMonth = date.daysInMonth();
        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Day(
                `${year}-${leftPad(month, 2)}-${leftPad(i, 2)}`
            );
            this.days.push(day);
        }
    }

    static MonthByDate(date: Date): Month {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return new Month(month, year);
    }

    static CurrentMonth(): Month {
        const date = new Date();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const m = new Month(month, year);
        return m;
    }
}
