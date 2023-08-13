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

interface BlobWrapperProps extends Partial<Position>, Props {}

export const BlobWrapper: React.FC<BlobWrapperProps> = ({
    right = "100px",
    top = "150px",
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
            <SimpleBlob />
        </div>
    );
};
