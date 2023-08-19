import { DayProps } from "../../types/props";
import { Text } from "../typography";
import { dayUnit } from "./day";

export const CalendarDay: React.FC<DayProps> = ({ day }) => {
    return (
        <span className={dayUnit()}>
            <Text css={{ fontWeight: "bold" }} fontSizes="3xl">
                {day.getDay()}
            </Text>
            <Text fontSizes={"lg"}>{day.getWeekday().abreviation}</Text>
        </span>
    );
};
