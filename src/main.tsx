import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import "./index.css";
import { CalendarProvider } from "./context/CalendarContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ThemeProvider>
            <CalendarProvider>
                <App />
            </CalendarProvider>
        </ThemeProvider>
    </React.StrictMode>
);
