import { createContext, useState } from "react";
import { light, dark, fun } from "../../stitches.config";
import React from "react";
import { Props } from "../types/props";

type ThemeName = "light" | "dark" | "fun";

interface IThemeContext {
    cycleTheme: () => void;
    theme: ThemeName;
}

const themesLUT: Record<ThemeName, string> = {
    light: light.className,
    dark: dark.className,
    fun: fun.className,
};

export const ThemeContext = createContext({} as IThemeContext);

export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeName>("light");

    const applyTheme = (newTheme: ThemeName) => {
        const html = document.documentElement;
        html.classList.remove(themesLUT[theme]);
        html.classList.add(themesLUT[newTheme]);
    };

    const cycleTheme = () => {
        const themes = Object.keys(themesLUT) as ThemeName[];
        const currThemeIndex = themes.indexOf(theme);
        const nextTheme = themes[(currThemeIndex + 1) % themes.length];
        applyTheme(nextTheme);
        setTheme(nextTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, cycleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
