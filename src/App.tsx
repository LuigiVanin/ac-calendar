import "./App.css";
import { css } from "../stitches.config";
import { Props } from "./types/props";
import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const button = css({
    backgroundColor: "$loContrast",
    paddingInline: "$sm",
    paddingBlock: "$sm",
    color: "$hiContrast",
});

const text = css({
    color: "$hiContrast",
    fontSize: "$4",
});

const Text: React.FC<Props> = ({ children }) => {
    return <span className={text()}>{children}</span>;
};

const wrapper = css({
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "$loContrast",
});

function App() {
    const { theme, cycleTheme } = useContext(ThemeContext);

    return (
        <div className={wrapper()}>
            <Text>{theme}</Text>
            <button className={button()} onClick={() => cycleTheme()}>
                <span>Botão</span>
            </button>
            <Text>Teste</Text>
        </div>
    );
}

export default App;
