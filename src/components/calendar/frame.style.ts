import { css } from "../../../stitches.config";

export const calendarFrame = css({
    width: "100%",
    maxWidth: "1080px",
    backgroundColor: "$loContrast",
    display: "flex",
    padding: "25px",
    flexDirection: "column",
    gap: "$xl",
    ul: {
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
            width: "20% ",
        },
    },
});
