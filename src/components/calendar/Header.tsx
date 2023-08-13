import { useCalendar } from "../../hooks/useCalendar";
import { Button } from "../button/Button";
import { Text } from "../typography";

export const CalendarHeader = () => {
    const { month, changeMonthLeft, changeMonthRight } = useCalendar();

    return (
        <div className="button-group">
            <Button onClick={() => changeMonthLeft()}>Left</Button>
            <Text>{month.name}</Text>
            <Button onClick={() => changeMonthRight()}>Right</Button>
        </div>
    );
};
