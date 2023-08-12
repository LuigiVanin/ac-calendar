import { createContext, useState } from "react";
import { Props } from "../types/props";

interface ICalendarContext {
    month: number;
    changeMonthLeft: () => void;
    changeMonthRight: () => void;
}

export const CalendarContext = createContext({} as ICalendarContext);

export const CalendarProvider: React.FC<Props> = ({ children }) => {
    const [month, setMonth] = useState(8);
    const changeMonthLeft = () => {
        setMonth(month - 1);
    };
    const changeMonthRight = () => {
        setMonth(month + 1);
    };
    return (
        <CalendarContext.Provider
            value={{ month, changeMonthLeft, changeMonthRight }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
