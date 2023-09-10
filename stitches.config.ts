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
            sx: "3px",
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
            hiContrast: "#222",
            loContrast: "white",
            secondaryColor: "#f4f4f4",
            darkerSecondaryColor: "#e2e2e2",
            green: "rgb(60, 217, 117)",
            darkerGreen: "rgb(50, 187, 97)",
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
        hiContrast: "#222",
        loContrast: "white",
        secondaryColor: "#f4f4f4",
        darkerSecondaryColor: "#e2e2e2",
    },
});

export const dark = createTheme("dark-theme", {
    colors: {
        hiContrast: "white",
        loContrast: "#222",
        secondaryColor: "rgb(50, 50, 50)",
        darkerSecondaryColor: "#121212",
    },
});

export const fun = createTheme("fun-theme", {
    colors: {
        hiContrast: "hotpink",
        loContrast: "papayawhip",
    },
});
