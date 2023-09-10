import { css, keyframes } from "../../../stitches.config";

const rotationAnimation = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});

export const modalBody = css({
    width: "100%",
    ".row": {
        display: "flex",
        flexDirection: "row",
        gap: "25px",
        height: "100%",
    },
    ".column": {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        gap: "$md",

        button: {
            marginTop: "auto",
        },
    },
    "span.line": {
        width: "100%",
        height: "3px",
        background: "rgb(236, 236, 236)",
        borderRadius: "$sm",
        marginBottom: "$sm",
    },
    h1: {
        marginTop: "25px",
        marginBottom: "$sm",
        height: "auto",
    },

    ".modal__body__birthday": {
        display: "flex",
        alignItems: "center",
        gap: "$md",
        color: "$hiContrast",
    },
    ".modal__body__title": {
        marginBottom: "$md",
    },
    ".modal__body__avatar-wrapper": {
        borderRadius: "$rounded",
        width: "185px",
        height: "185px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "101%",
            height: "101%",
            borderRadius: "$rounded",
            // background: "red",

            background:
                "linear-gradient(45deg, rgb(2, 91, 36) 0%, rgb(22, 163, 74) 20%, rgb(74, 222, 128) 50%, rgb(163, 230, 53) 100%)",
            animation: `${rotationAnimation} 5s ease-in infinite`,
        },

        ".avatar__wrapper": {
            zIndex: 10,
        },
    },
});
