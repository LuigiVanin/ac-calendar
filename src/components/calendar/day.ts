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
    background: "#f2f2f2",
    "&:hover": {
        background: "#e2e2e2",
    },
    p: {
        marginTop: "0px",
    },
    variants: {
        color: {
            today: {
                background: "#38bdf8",
                boxShadow:
                    "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);",
                "&:hover": {
                    background: "#0ea5e9",
                },
            },
            default: {
                background: "#f2f2f2",
                "&:hover": {
                    background: "#e2e2e2",
                },
            },
            birthday: {
                background: "#22c55e",
            },
        },
    },
});
