import { Props } from "../../types/props";
import { text } from "./typography.style";

export type StyleTextProps = Parameters<typeof text>[0] & {
    as?: React.ElementType;
};

interface TextProps extends Props, StyleTextProps {}

export const Text: React.FC<TextProps> = ({ children, as = "p", ...props }) => {
    const Element = as;
    return <Element className={text({ ...props })}>{children}</Element>;
};
