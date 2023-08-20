import { Day } from "../modules/calendar";

export interface Props {
    children?: any;
}

export type DayProps = Props & { day: Day; selected?: boolean };
