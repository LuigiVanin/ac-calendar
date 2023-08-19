import { useCalendar } from "../../hooks/useCalendar";
import { CalendarFrame } from "./Frame";
import { CalendarDay } from "./Day";
import { css } from "../../../stitches.config";
import React, { ReactElement } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const ul = css({
    display: "grid",
    // flexDirection: "row",
    // flexWrap: "wrap",
    // gap: "$md",
    gridTemplateColumns: `
            minmax(45px, 1fr)
            minmax(45px, 1fr)
            minmax(45px, 1fr)
            minmax(45px, 1fr)
            minmax(45px, 1fr)
            minmax(45px, 1fr) 
            minmax(45px, 1fr)
            minmax(45px, 1fr)
        `,

    li: {
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // borderBottom: "1px solid black",
        // borderRight: "1px solid black",
    },
});

interface CalendarProps {
    header: Element | ReactElement;
}

export const Calendar: React.FC<CalendarProps> = ({ header }) => {
    const { month } = useCalendar();
    const [parent] = useAutoAnimate();

    return (
        <CalendarFrame>
            {header}

            <ul className={ul()} ref={parent}>
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
