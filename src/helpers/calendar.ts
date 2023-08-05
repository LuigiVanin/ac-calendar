import moment from "moment";

interface IDay {
    getMonth(): number;
    getDay(): number;
    getWeekday(): number;
    getCurrentDiffDays(day?: Date): number;
}

export interface Member {
    name: string;
    nickname: string;
    birthday: `${number}-${number}-${number}`;
    email: string;
    phone: string;
}

export abstract class AbstractDay implements IDay {
    month: number;
    day: number;
    weekday: number;
    date: moment.Moment;

    constructor(date: `${number}-${number}-${number}`) {
        this.date = moment(date);
        this.month = this.date.month();
        this.day = this.date.date();
        this.weekday = this.date.weekday();
    }

    getMonth() {
        return this.month;
    }

    getDay() {
        return this.day;
    }

    getWeekday() {
        return this.weekday;
    }

    getCurrentDiffDays(day?: Date) {
        const today = day || new Date();
        const date1 = moment(today);
        return date1.diff(moment(this.date), "days");
    }
}

export class Birthday extends AbstractDay {
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

export class Day extends AbstractDay {
    birtdays: Birthday[] = [];

    constructor(date: `${number}-${number}-${number}`) {
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

export class Month {
    days: Day[] = [];

    constructor(month: number, year: number) {
        const date = moment(`${year}-${month}-01`);
        const daysInMonth = date.daysInMonth();
        for (let i = 1; i <= daysInMonth; i++) {
            this.days.push(new Day(`${year}-${month}-${i}`));
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
        return new Month(month, year);
    }
}
