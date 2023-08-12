import moment from "moment";

interface ICalendarUnit {
    getMonth(): number;
    getDay(): number;
    getWeekday(): number;
    getCurrentDiffDays(day?: Date): number;
}

type StringDateFormat = `${string}-${string}-${string}`;

export interface Member {
    name: string;
    nickname: string;
    birthday: StringDateFormat;
    email: string;
    phone: string;
}

export abstract class CalendarUnit implements ICalendarUnit {
    month: number;
    day: number;
    weekday: { idx: number; name: string; abreviation: string };
    date: moment.Moment;

    constructor(date: StringDateFormat) {
        this.date = moment(date);
        // NOTE: Take this with a grain of salt, but momentjs is a bit weird
        //       months start with 0, so january is 0 and december is 11. To set
        //       I am starting with 1 to 12, so I am adding 1 to the month that
        //       get from momentjs.
        this.month = this.date.month() + 1;
        this.day = this.date.date();
        this.weekday = {
            idx: this.date.weekday(),
            name: this.date.format("dddd"),
            abreviation: this.date.format("ddd"),
        };
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getWeekday() {
        return this.weekday.idx;
    }

    getCurrentDiffDays(day?: Date) {
        const today = day || new Date();
        const date1 = moment(today);
        return date1.diff(moment(this.date), "days");
    }

    get name() {
        return this.date.format("MMMM");
    }
}

export class Birthday extends CalendarUnit {
    private member: Member;
    constructor(member: Member) {
        super(member.birthday);
        this.member = member;
    }

    getPerson() {
        return this.member;
    }

    getCurrentDiffDays(day?: Date) {
        const today = day || new Date();
        const date1 = moment(today);
        return date1.diff(moment(this.member.birthday), "days");
    }
}

export class Day extends CalendarUnit {
    birtdays: Birthday[] = [];

    constructor(date: StringDateFormat) {
        super(date);
        this.birtdays = [];
    }

    addBirthday(birthday: Birthday) {
        this.birtdays.push(birthday);
    }

    getCurrentDiffDays(day?: Date) {
        const today = day || new Date();
        const date1 = moment(today);
        return date1.diff(this.date, "days");
    }

    getBirthdays() {
        return this.birtdays;
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
