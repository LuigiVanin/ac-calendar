export interface IWeekday {
    idx: number;
    name: string;
    abreviation: string;
}

export interface ICalendarUnit {
    getMonth(): number;
    getDay(): number;
    getWeekday(): IWeekday;
    getCurrentDiffDays(day?: Date): number;
}

export type StringDateFormat = `${string}-${string}-${string}`;

export interface Member {
    name: string;
    nickname: string;
    birthday: StringDateFormat;
    email: string;
    phone: string;
    avatar: string;
}
