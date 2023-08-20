import React from "react";
import { css } from "../../../stitches.config";
import { Props } from "../../types/props";
import { SimpleBlob } from "./Blob";

const blobWrapper = css({
    position: "fixed",
    right: "100px",
    top: "150px",
    zIndex: 0,

    variants: {
        position: {},
    },
});

interface Position {
    right: `${number}${"px" | "%" | "vw"}`;
    top: `${number}${"px" | "%" | "vh"}`;
}

interface BlobWrapperProps extends Partial<Position>, Props {
    delay?: number;
    duration?: number;
}

export const BlobWrapper: React.FC<BlobWrapperProps> = ({
    right = "125px",
    top = "80px",
    delay = 0,
    duration = 20,
}) => {
    return (
        <div
            className={blobWrapper({
                css: {
                    top,
                    right,
                },
            })}
        >
            <SimpleBlob delay={delay} duration={duration} />
        </div>
    );
};
