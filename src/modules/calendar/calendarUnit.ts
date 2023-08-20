import moment from "moment";
import { ICalendarUnit, IWeekday, StringDateFormat } from "./types";

export abstract class CalendarUnit implements ICalendarUnit {
    protected month: number;
    protected day: number;
    protected weekday: IWeekday;
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
        return this.weekday;
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
