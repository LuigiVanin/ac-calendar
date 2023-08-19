import { css } from "../../../stitches.config";

export const dayUnit = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: "1 / 1",
    maxWidth: "100px",
    background: "#f2f2f2",
    borderRadius: "$rounded",
    gap: "$sm",
    "&:hover": {
        background: "#e2e2e2",
    },
    p: {
        marginTop: "0px",
    },
});
