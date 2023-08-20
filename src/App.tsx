import "./reset.css";
import "./App.css";
import { Calendar } from "./components/calendar";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { Button } from "./components/button/Button";
import { css } from "../stitches.config";
import { BlobWrapper } from "./components/blob/BlobWrapper";
import { CalendarHeader } from "./components/calendar/Header";
import { Header } from "./components/header/Header";

const layout = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    background: "$loContrast",
    width: "100%",
    minHeight: "100vh",

    ".layout__content": {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "25px",
        width: "100%",
        minHeight: "100vh",
        zIndex: 10,
        backdropFilter: "blur(45px)",
    },
});

const App = () => {
    const { cycleTheme } = useContext(ThemeContext);

    return (
        <div className={layout()}>
            <BlobWrapper />
            <BlobWrapper right="80vw" top="70vh" />
            <div className="layout__content">
                <Header />

                <Calendar header={<CalendarHeader />} />
            </div>
        </div>
    );
};

export default App;
