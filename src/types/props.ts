import { Day } from "../helpers/calendar";

export interface Props {
    children?: any;
}

export type DayProps = Props & { day: Day; selected?: boolean };
