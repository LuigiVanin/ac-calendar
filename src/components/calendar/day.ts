import { css } from "../../../stitches.config";

export const dayUnit = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: "1 / 1",
    maxWidth: "100px",
    borderRadius: "$rounded",
    gap: "$sm",
    transition: "all",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out",
    background: "$secondaryColor",
    position: "relative",
    "&:hover": {
        background: "$darkerSecondaryColor",
    },
    p: {
        marginTop: "0px",
    },
    ul: {
        position: "absolute",
        right: "5px",
        top: "5px",
        width: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        li: {
            height: "15px",
        },
    },
    variants: {
        color: {
            today: {
                background: "#38bdf8",
                boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
                p: {
                    color: "$loContrast",
                },
                "&:hover": {
                    background: "#0ea5e9",
                },
            },
            default: {
                background: "$secondaryColor",

                "&:hover": {
                    background: "$darkerSecondaryColor",
                },
            },
            birthday: {
                p: {
                    color: "$loContrast",
                },
                cursor: "pointer",
                background:
                    "linear-gradient(45deg, rgba(21,128,61,1) 0%, rgba(22,163,74,1) 20%, rgba(74,222,128,1) 50%, rgba(163,230,53,1) 100%)",
                boxShadow: "rgba(163, 230, 53, 0.6) 0px 0px 25px 5px",
                "&:hover": {
                    background:
                        "linear-gradient(45deg, rgba(21,128,61,1) 0%, rgba(22,163,74,1) 20%, rgba(74,222,128,1) 50%, rgba(163,230,53,1) 100%)",
                    boxShadow: "rgba(163, 230, 53, 0.71) 0px 0px 50px 5px",
                },
            },
        },
    },
});
