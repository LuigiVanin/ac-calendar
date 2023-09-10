import { css } from "@stitches/core";

export const text = css({
    color: "$hiContrast",
    fontSize: "$4",
    // marginBottom: "$md",

    strong: {
        fontWeight: "bold",
    },
    variants: {
        color: {
            normal: {
                background: "transparent",
                color: "$hiContrast",
            },
            contrast: {
                background: "transparent",
                color: "$loContrast",
            },
            blue: {
                background: "transparent",
                color: "#38bdf8 !important",
            },
            gray: {
                background: "transparent",
                color: "gray",
            },
        },
        fontSizes: {
            sm: {
                fontSize: "$1",
            },
            md: {
                fontSize: "$2",
            },
            lg: {
                fontSize: "$3",
            },
            xl: {
                fontSize: "$4",
            },
            "2xl": {
                fontSize: "$5",
            },
            "3xl": {
                fontSize: "$6",
            },
        },
        align: {
            center: {
                textAlign: "center",
            },
            left: {
                textAlign: "left",
            },
            right: {
                textAlign: "right",
            },
        },
    },
});
