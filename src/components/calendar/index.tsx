import { Button } from "../button/Button";
import { Text } from "../typography";
import { useCalendar } from "../../hooks/useCalendar";
import { CalendarFrame } from "./Frame";
import { CalendarDay } from "./Day";

export const Calendar = () => {
    const { month, changeMonthLeft, changeMonthRight } = useCalendar();

    return (
        <CalendarFrame>
            <div className="Button-group">
                <Button onClick={() => changeMonthLeft()}>Left</Button>
                <Button onClick={() => changeMonthRight()}>Right</Button>
            </div>
            <ul>
                {month.days.map((date) => {
                    return (
                        <li key={date.getDay()}>
                            <CalendarDay day={date} />
                        </li>
                    );
                })}
            </ul>
        </CalendarFrame>
    );
};
