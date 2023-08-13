import { css } from "../../../stitches.config";

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
    boxShadow: "#9393932e 0px 0px 15px",

    "&:after": {
        content: "",
    },
});
