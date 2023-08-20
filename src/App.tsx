import "./reset.css";
import "./App.css";
import { Calendar } from "./components/calendar";
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
        gap: "65px",
        width: "100%",
        minHeight: "100vh",
        zIndex: 10,
        backdropFilter: "blur(45px)",
    },
});

const App = () => {
    return (
        <div className={layout()}>
            <BlobWrapper duration={25} />
            <BlobWrapper right="75vw" top="70vh" delay={2} duration={9} />
            <div className="layout__content">
                <Header />

                <Calendar header={<CalendarHeader />} />
            </div>
        </div>
    );
};

export default App;
