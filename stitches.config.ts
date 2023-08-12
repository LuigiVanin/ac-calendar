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
            1: "0.5rem",
            2: "0.75rem",
            3: "1rem",
            4: "1.2rem",
            5: "1.5rem",
            6: "1.7rem",
            7: "2rem",
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
