import "./reset.css";
import "./App.css";
import { css } from "../stitches.config";
import { ThemeContext } from "./context/ThemeContext";
import { Text } from "./components/typography/Typography";
import { useContext } from "react";
import { useCalendar } from "./hooks/useCalendar";
import { Button } from "./components/button/Button";

const wrapper = css({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "$loContrast",
    display: "flex",
    flexDirection: "column",
    gap: "$xl",
    ul: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",

        li: {
            width: "20%",
        },
    },
});

function App() {
    const { theme, cycleTheme } = useContext(ThemeContext);
    const { month, changeMonthLeft, changeMonthRight } = useCalendar();

    return (
        <div className={wrapper()}>
            <Text>{month.name}</Text>
            <Text>{theme}</Text>
            <Button onClick={() => cycleTheme()}>
                <span>Botão</span>
            </Button>
            <div className="Button-group">
                <Button onClick={() => changeMonthLeft()}>Left</Button>
                <Button onClick={() => changeMonthRight()}>Right</Button>
            </div>
            <ul>
                {month.days.map((day) => {
                    return (
                        <li key={day.day}>
                            <Text>
                                {day.getDay()}-{day.weekday.name}
                            </Text>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default App;
