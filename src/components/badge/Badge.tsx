import React from "react";
import { Props } from "../../types/props";
import { badge } from "./badge.style";

type BadgeStyleProps = Parameters<typeof badge>[0] & Props;

export const Badge: React.FC<BadgeStyleProps> = ({ children, ...props }) => {
    return <span className={badge(props)}>{children}</span>;
};
