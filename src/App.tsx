import "./App.css";
import { css } from "../stitches.config";
import { ThemeContext } from "./context/ThemeContext";
import { Text } from "./components/typography/Typography";
import { useContext } from "react";
import { Month } from "./helpers/calendar";

const button = css({
    backgroundColor: "$loContrast",
    paddingInline: "$sm",
    paddingBlock: "$sm",
    color: "$hiContrast",
});

const wrapper = css({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "$loContrast",
    display: "flex",
    flexDirection: "column",
});

function App() {
    const { theme, cycleTheme } = useContext(ThemeContext);

    const month = Month.CurrentMonth();

    return (
        <div className={wrapper()}>
            <Text>{theme}</Text>
            <button className={button()} onClick={() => cycleTheme()}>
                <span>Botão</span>
            </button>
            {month.days.map((day) => {
                return <Text>{day.getDay()}</Text>;
            })}
            _
        </div>
    );
}

export default App;
