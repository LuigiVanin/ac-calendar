import React from "react";
import { SvgProps } from "../../types/props";

export const RightArrowIcon: React.FC<SvgProps> = ({
    size,
    color = "currentColor",
}) => {
    return (
        <>
            {
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon"
                    viewBox="0 0 512 512"
                    width={size}
                    height={size}
                >
                    <path
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="48"
                        d="M268 112l144 144-144 144M392 256H100"
                    />
                </svg>
            }
        </>
    );
};
