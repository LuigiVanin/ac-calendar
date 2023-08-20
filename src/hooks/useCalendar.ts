import { Month } from "../modules/calendar";
import { CalendarContext } from "./../context/CalendarContext";
import { useContext, useEffect, useState } from "react";

export const useCalendar = () => {
    const {
        month: monthCount,
        changeMonthLeft,
        changeMonthRight,
    } = useContext(CalendarContext);

    const [month, setMonth] = useState(() => new Month(monthCount, 2023));
    useEffect(() => {
        setMonth(new Month(monthCount, 2023));
    }, [monthCount]);
    return { month, changeMonthLeft, changeMonthRight };
};
