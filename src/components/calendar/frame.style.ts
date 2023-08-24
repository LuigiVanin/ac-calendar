import { keyframes } from "@stitches/core";
import { css } from "../../../stitches.config";

// const shineEffect = keyframes({
//     "0%": {
//         left: "65%",
//         bottom: "-65%",
//         opacity: "1",
//     },
//     "75%": {
//         opacity: "0",
//     },
//     "100%": {
//         left: "-75%",
//         bottom: "65%",
//         opacity: "0",
//     },
// });

export const calendarFrame = css({
    width: "100%",
    maxWidth: "1080px",
    backgroundColor: "$loContrast",
    display: "flex",
    padding: "25px",
    flexDirection: "column",
    gap: "$xl",
    zIndex: 10,
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(15px)",
    borderRadius: "$lg",
    border: "5px solid #d2d2d22e",
    boxShadow: "rgba(15, 15, 15, 0.2) 0px 0px 15px",
    overflow: "hidden",

    // "&:after": {
    //     content: "",
    //     position: "absolute",
    //     height: "150%",
    //     width: "150%",
    //     borderRadius: "$lg",
    //     opacity: "1",
    //     pointerEvents: "none",
    //     background:
    //         "linear-gradient(to top left, transparent 20%, rgba(255, 255, 255, 0.80), transparent 80%)",
    //     // "linear-gradient(to top left, transparent 35%, red, transparent 75%)",

    //     left: "0px",
    //     bottom: "0px",
    //     animation: `${shineEffect} 1000ms`,
    //     animationIterationCount: "infinite",
    //     animationTimingFunction: "cubic-bezier(0,.93,.32,.52)",
    // },
});
