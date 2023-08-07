import "./reset.css";
import "./App.css";
import { css } from "../stitches.config";
import { ThemeContext } from "./context/ThemeContext";
import { Text } from "./components/typography/Typography";
import { useContext, useEffect, useState } from "react";
// import { Month } from "./helpers/calendar";
import { CalendarContext } from "./context/CalendarContext";
import { Month } from "./helpers/calendar";

const button = css({
    backgroundColor: "$hiContrast",
    paddingInline: "$sm",
    paddingBlock: "$sm",
    color: "$loContrast",
    borderRadius: "$sm",
    border: "none",
});

const wrapper = css({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "$loContrast",
    display: "flex",
    flexDirection: "column",
    gap: "$xl",
});

function App() {
    const { theme, cycleTheme } = useContext(ThemeContext);
    const {
        month: monthCount,
        changeMonthLeft,
        changeMonthRight,
    } = useContext(CalendarContext);

    const [month, setMonth] = useState(() => new Month(monthCount, 2023));
    month;
    useEffect(() => {
        setMonth(new Month(monthCount, 2023));
    }, [monthCount]);

    return (
        <div className={wrapper()}>
            {monthCount}
            <Text>{theme}</Text>
            <button className={button()} onClick={() => cycleTheme()}>
                <span>Botão</span>
            </button>
            <div className="button-group">
                <button className={button()} onClick={() => changeMonthLeft()}>
                    Left
                </button>
                <button className={button()} onClick={() => changeMonthRight()}>
                    Right
                </button>
            </div>
            {month.days.map((day) => {
                return (
                    <Text key={day.day}>
                        {day.getDay()}-{day.weekday.name}
                    </Text>
                );
            })}
        </div>
    );
}

export default App;
