import { useCalendar } from "../../hooks/useCalendar";
import { CalendarFrame } from "./Frame";
import { CalendarDay } from "./Day";
import { css } from "../../../stitches.config";
import React, { ReactElement, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { motion } from "framer-motion";
import { Day } from "../../modules/calendar";
import { DayModal } from "./DayModal";

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
    },
});

interface CalendarProps {
    header: Element | ReactElement;
}

export const Calendar: React.FC<CalendarProps> = ({ header }) => {
    const { month } = useCalendar();
    const [parent] = useAutoAnimate();

    const [selectedDay, setSelectedDay] = useState<Day | null>(null);

    const disableModal = () => {
        setSelectedDay(null);
    };

    const daySelectHandler = (date: Day) => {
        date.hasBirthday() && setSelectedDay(date);
    };

    return (
        <>
            <CalendarFrame>
                {header}

                <ul className={ul()} ref={parent}>
                    {month.days.map((date) => {
                        return (
                            <motion.li
                                key={`${date.getDay()}-${date.getMonth()}`}
                                layoutId={`${date.getDay()}-${date.getMonth()}`}
                                onClick={() => daySelectHandler(date)}
                            >
                                <CalendarDay day={date} />
                            </motion.li>
                        );
                    })}
                </ul>
            </CalendarFrame>
            {selectedDay && (
                <DayModal
                    day={selectedDay!}
                    disableModal={disableModal}
                    openModal={!!selectedDay}
                    layoutId={`${selectedDay.getDay()}-${selectedDay.getMonth()}`}
                />
            )}
        </>
    );
};
