import moment from "moment";
import { DayProps } from "../../types/props";
import { Text } from "../typography";
import { dayUnit } from "./day";
import { useMemo } from "react";
import { Avatar } from "../avatar/Avatar";

export const CalendarDay: React.FC<DayProps> = ({ day }) => {
    const isToday = useMemo(() => day.date.isSame(moment(), "day"), [day]);

    const variant = useMemo(() => {
        if (day.birthdays.length) {
            return "birthday";
        }
        if (isToday) {
            return "today";
        } else {
            return "default";
        }
    }, [isToday]);

    const birthdaysAvatar = useMemo(
        () => day.getBirthdays().map((birthday) => birthday.getPerson().avatar),
        [day.getBirthdays()]
    );

    const haveBirthdays = useMemo(
        () => !!day.getBirthdays().length,
        [day.getBirthdays()]
    );
    return (
        <span className={dayUnit({ color: variant })}>
            {haveBirthdays && (
                <ul>
                    <li className="day__user-badge">
                        <Avatar avatar={birthdaysAvatar[0]} />
                    </li>
                </ul>
            )}
            <Text css={{ fontWeight: "bold" }} fontSizes="3xl">
                {day.getDay()}
            </Text>
            <Text fontSizes={"lg"}>{day.getWeekday().abreviation}</Text>
        </span>
    );
};
