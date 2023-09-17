import moment from "moment";
import { DayProps } from "../../types/props";
import { Text } from "../typography";
import { dayUnit } from "./day.style";
import { useMemo } from "react";
import { Avatar } from "../avatar/Avatar";

export const CalendarDay: React.FC<DayProps> = ({ day }) => {
    const isToday = useMemo(() => day.date.isSame(moment(), "day"), [day]);

    const variant = useMemo(() => {
        if (day.birthdays.length && isToday) {
            return "today-birthday";
        }
        if (day.birthdays.length) {
            return "birthday";
        }
        if (isToday) {
            return "today";
        } else {
            return "default";
        }
    }, [isToday, day.birthdays.length]);

    const birthdaysAvatar = useMemo(
        () => day.getBirthdays().map((birthday) => birthday.getPerson().avatar),
        [day]
    );

    const haveBirthdays = useMemo(() => !!day.getBirthdays().length, [day]);
    return (
        <span className={dayUnit({ color: variant })}>
            {haveBirthdays ? (
                <ul>
                    <li>
                        <Avatar avatar={birthdaysAvatar[0]} />
                    </li>
                </ul>
            ) : (
                isToday && (
                    <div className="badge">
                        <Text fontSizes="lg" color="blue">
                            Hoje
                        </Text>
                    </div>
                )
            )}
            {haveBirthdays && isToday && (
                <div className="badge left">
                    <Text fontSizes="lg" color="blue">
                        Hoje
                    </Text>
                </div>
            )}
            <Text css={{ fontWeight: "bold" }} fontSizes="3xl">
                {day.getDay()}
            </Text>
            <Text fontSizes={"lg"}>{day.getWeekday().abreviation}</Text>
        </span>
    );
};
