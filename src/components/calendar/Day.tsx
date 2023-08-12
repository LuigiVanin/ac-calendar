import { Day } from "../../helpers/calendar";
import { Props } from "../../types/props";
import { Text } from "../typography";

type DayProps = Props & { day: Day };

export const CalendarDay: React.FC<DayProps> = ({ day }) => {
    return (
        <Text>
            {day.getDay()}-{day.getWeekday().abreviation}
        </Text>
    );
};
