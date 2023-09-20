import { css } from "../../../stitches.config";

export const button = css({
    paddingBlock: "$sm",
    borderRadius: "$sm",
    border: "none",
    cursor: "pointer",
    gap: "$sm",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",

    "&:disabled": {
        backgroundColor: "$disabledColor",
        "&:hover": {
            backgroundColor: "$disabledColor",
        },
        cursor: "not-allowed",
    },
    variants: {
        size: {
            sm: {
                height: "25px",
                fontSize: "$2",
                paddingInline: "$md",
            },
            md: {
                height: "40px",
                fontSize: "$3",
                paddingInline: "$lg",
            },
            lg: {
                height: "55px",
                fontSize: "$4",
                paddingInline: "$xl",
            },
            auto: {
                paddingInline: "$md",
            },
        },
        color: {
            primary: {
                backgroundColor: "$hiContrast",
                color: "$loContrast",
            },
            green: {
                backgroundColor: "$green",
                color: "$loContrast",

                "&:hover": {
                    backgroundColor: "$darkerGreen",
                },
            },
        },
    },
    defaultVariants: {
        color: "primary",
        size: "auto",
    },
});
