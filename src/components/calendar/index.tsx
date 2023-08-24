import { useCalendar } from "../../hooks/useCalendar";
import { CalendarFrame } from "./Frame";
import { CalendarDay } from "./Day";
import { css } from "../../../stitches.config";
import React, { ReactElement, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { AnimatePresence, motion } from "framer-motion";

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

const birthDayModal = css({
    position: "fixed",
    top: "calc(50% - 150px)",
    left: "calc(50% - 300px)",
    zIndex: 1000,
    display: "flex",
    width: "600px",
    height: "300px",
    maxWidth: "600px",
    maxheight: "300px",
    background: "white",
    borderRadius: "10px",
    boxShadow: "rgba(15, 15, 15, 0.2) 0px 0px 15px",
    button: {
        width: "25px",
        height: "25px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "auto",
        marginTop: "10px",
        marginRight: "10px",
        background: "#ffffff",
    },
});

interface CalendarProps {
    header: Element | ReactElement;
}

export const Calendar: React.FC<CalendarProps> = ({ header }) => {
    const { month } = useCalendar();
    const [parent] = useAutoAnimate();

    const [selectedDay, setSelectedDay] = useState<string | null>(null);
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
                                onClick={() =>
                                    setSelectedDay(
                                        `${date.getDay()}-${date.getMonth()}`
                                    )
                                }
                            >
                                <CalendarDay day={date} />
                            </motion.li>
                        );
                    })}
                </ul>
            </CalendarFrame>
            <AnimatePresence mode="popLayout">
                {selectedDay && (
                    <motion.div
                        key="modal"
                        layoutId={selectedDay}
                        className={birthDayModal()}
                    >
                        <button onClick={() => setSelectedDay(null)}>x</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
