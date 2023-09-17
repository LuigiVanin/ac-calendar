import { createContext, useState } from "react";
import { Props } from "../types/props";
import moment from "moment";

interface ICalendarContext {
    month: number;
    changeMonthLeft: () => void;
    changeMonthRight: () => void;
}

export const CalendarContext = createContext({} as ICalendarContext);

export const CalendarProvider: React.FC<Props> = ({ children }) => {
    const [month, setMonth] = useState(moment().month() + 1);
    const changeMonthLeft = () => {
        if (month > 1) {
            setMonth(month - 1);
        }
    };
    const changeMonthRight = () => {
        if (month < 12) {
            setMonth(month + 1);
        }
    };
    return (
        <CalendarContext.Provider
            value={{ month, changeMonthLeft, changeMonthRight }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
