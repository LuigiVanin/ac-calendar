import { css } from "../../../stitches.config";

export const badge = css({
    display: "inline-flex",
    background: "red",
    variants: {
        size: {
            sm: {
                paddingBlock: "$md",
                paddingInline: "$md",
                borderRadius: "$sm",
                fontSize: "$3",
            },
            md: {
                paddingBlock: "$md",
                paddingInline: "$lg",
                borderRadius: "$sm",
                fontSize: "$4",
            },
        },
        color: {
            info: {
                background: "rgb(226, 246, 255)",
                color: "#38bdf8",
            },
            danger: {
                color: "red",
                background: "#ffcdcd",
            },
            sucess: {
                color: "#20b320",
                background: "rgb(232, 255, 232)",
            },
        },
    },
    defaultVariants: {
        size: "sm",
        color: "info",
    },
});
