import "./reset.css";
import "./App.css";
import { Calendar } from "./components/calendar";
import { Text } from "./components/typography";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { Button } from "./components/button/Button";
import { css } from "../stitches.config";

const layout = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "25px",
    background: "$loContrast",
    width: "100%",
    minHeight: "100vh",
});

const App = () => {
    const { theme, cycleTheme } = useContext(ThemeContext);
    const { month } = useCalendar();

    return (
        <div className={layout()}>
            <Text>{month.name}</Text>
            <Text>{theme}</Text>
            <Button onClick={() => cycleTheme()}>
                <span>Botão</span>
            </Button>
            <Calendar />
        </div>
    );
};

export default App;
