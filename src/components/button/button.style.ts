import { css } from "../../../stitches.config";

export const button = css({
    backgroundColor: "$hiContrast",
    paddingInline: "$md",
    paddingBlock: "$sm",
    color: "$loContrast",
    borderRadius: "$sm",
    border: "none",
    cursor: "pointer",
    gap: "$sm",
    variants: {
        size: {
            sm: {
                height: "25px",
            },
            md: {
                height: "40px",
            },
            lg: {
                height: "55px",
            },
        },
    },
});
