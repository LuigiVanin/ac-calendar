import { css } from "../../../stitches.config";

export const avatarStyle = css({
    display: "flex",
    objectFit: "cover",
    objectPosition: "center",
    maxHeight: "45px",
    borderRadius: "$rounded",
    aspectRatio: "1 / 1",
    overflow: "hidden",
    border: "3px solid rgba(255, 255, 255, 0.55);",
    img: {
        objectFit: "cover",
    },
});
