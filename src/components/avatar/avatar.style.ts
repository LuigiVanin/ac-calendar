import { css } from "../../../stitches.config";

export const avatarStyle = css({
    display: "flex",
    objectFit: "cover",
    objectPosition: "center",
    maxHeight: "45px",
    borderRadius: "$rounded",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    border: "3px solid rgba(255, 255, 255, 0.55);",
    img: {
        objectFit: "cover",
    },

    variants: {
        size: {
            sm: {
                maxHeight: "30px",
            },
            md: {
                maxHeight: "45px",
            },
            lg: {
                maxHeight: "60px",
            },
            xl: {
                maxHeight: "75px",
            },
            "2xl": {
                maxHeight: "90px",
            },
            "3xl": {
                maxHeight: "105px",
            },
            "4xl": {
                maxHeight: "120px",
            },
            "5xl": {
                maxHeight: "135px",
            },
            "6xl": {
                maxHeight: "150px",
            },
            "7xl": {
                maxHeight: "175px",
            },
        },
    },
});
