import { header } from "./header.style";
import { Text } from "../typography";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Button } from "../button/Button";
import { CalendarIcon } from "../icon/CalendarIcon";
import { GithubIcon } from "../icon/GithubIcon";
import { SunIcon } from "../icon/SunIcon";

export const Header = () => {
    const { cycleTheme, theme } = useContext(ThemeContext);

    return (
        <header className={header()}>
            <Text as="h1">
                <CalendarIcon size={"22px"} />
                <span>AC Calendar</span>
            </Text>
            <nav>
                <Button
                    css={{ display: "flex", alignItems: "center" }}
                    onClick={() => cycleTheme()}
                >
                    <SunIcon size="20px" />
                    <span>{theme}</span>
                </Button>
                <a
                    href="https://github.com/LuigiVanin/ac-calendar"
                    target="_blank"
                >
                    <GithubIcon size="22px" />
                    github
                </a>
            </nav>
        </header>
    );
};
