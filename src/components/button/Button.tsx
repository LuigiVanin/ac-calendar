import { Props } from "../../types/props";
import { button } from "./button.style";

export type StyleProps = Parameters<typeof button>[0] & {
    onClick?: () => void;
    disabled?: boolean;
};

interface ButtonProps extends Props, StyleProps {}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    ...props
}) => {
    return (
        <button
            className={button({ ...props })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
