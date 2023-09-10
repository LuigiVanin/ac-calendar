import React from "react";
import { Props } from "../../types/props";
import { css } from "../../../stitches.config";

const badge = css({
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
        },
    },
    defaultVariants: {
        size: "sm",
        color: "info",
    },
});

type BadgeStyleProps = Parameters<typeof badge>[0] & Props;

export const Badge: React.FC<BadgeStyleProps> = ({ children, ...props }) => {
    return <span className={badge(props)}>{children}</span>;
};
