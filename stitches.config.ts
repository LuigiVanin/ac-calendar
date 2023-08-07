import { createStitches } from "@stitches/core";

export const {
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        fonts: {
            system: "system-ui",
        },
        radii: {
            sx: "2px",
            sm: "5px",
            md: "10px",
            lg: "15px",
            rounded: "50%",
        },
        space: {
            sx: "2px",
            sm: "5px",
            md: "10px",
            lg: "15px",
            xl: "20px",
            "2xl": "25px",
            "3xl": "30px",
            "4xl": "35px",
            "5xl": "40px",
            "6xl": "45px",
            "7xl": "50px",
            "8xl": "55px",
            "9xl": "60px",
        },
        colors: {
            hiContrast: "black",
            loContrast: "white",
        },
        fontSizes: {
            1: "10px",
            2: "13px",
            3: "16px",
            4: "19px",
            5: "23px",
            6: "26px",
        },
    },
});

export const light = createTheme("light-theme", {
    colors: {
        hiContrast: "black",
        loContrast: "white",
    },
});

export const dark = createTheme("dark-theme", {
    colors: {
        hiContrast: "white",
        loContrast: "black",
    },
});

export const fun = createTheme("fun-theme", {
    colors: {
        hiContrast: "hotpink",
        loContrast: "papayawhip",
    },
});
