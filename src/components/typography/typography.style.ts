import { css } from "@stitches/core";

export const text = css({
    color: "$hiContrast",
    fontSize: "$4",
    marginTop: "$md",
    variants: {
        color: {
            normal: {
                background: "transparent",
                color: "$hiContrast",
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
