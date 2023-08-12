import React from "react";
import { calendarFrame } from "./frame.style";
import { Props } from "../../types/props";

export const CalendarFrame: React.FC<Props> = ({ children }) => {
    return <div className={calendarFrame()}>{children}</div>;
};
