import moment from "moment";
import { CalendarUnit } from "./calendarUnit";
import { Member } from "./types";

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
