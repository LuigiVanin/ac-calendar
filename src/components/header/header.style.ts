import { css } from "../../../stitches.config";

export const header = css({
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "$2xl",
    borderBottom: "3px solid rgba(234, 234, 234, 0.3)",
    backdropFilter: "blur(30px)",

    nav: {
        display: "flex",
        gap: "$lg",
    },
    h1: {
        marginTop: "0px",
        display: "flex",
        alignItems: "center",
        gap: "$sm",
    },
    a: {
        display: "flex",
        alignItems: "center",
        gap: "$sm",
        color: "$hiContrast",
        paddingBlock: "$sm",
        paddingInline: "$md",
    },
});
