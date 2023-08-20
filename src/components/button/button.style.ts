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
                height: "15px",
            },
            md: {
                height: "25px",
            },
            lg: {
                height: "35px",
            },
        },
    },
});
