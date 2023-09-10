import { css } from "../../../stitches.config";
import { useCalendar } from "../../hooks/useCalendar";
import { ButtonCss } from "../../types/utils";
import { Button } from "../button/Button";
import { Text } from "../typography";

const calendarHeader = css({
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: "$sm",
    borderBottom: "3px solid #e1e1e15c",
    paddingBottom: "25px",
    flexDirection: "column",

    ".date-wrapper": {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        gap: "$lg",
    },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customButtonStyle: ButtonCss & any = {
    // minWidth: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const customTextStyle = {
    marginBlock: "0px",
    width: "120px",
    textAlign: "center",
};

export const CalendarHeader = () => {
    const { month, changeMonthLeft, changeMonthRight } = useCalendar();

    return (
        <div className={calendarHeader()}>
            {/* Refatorar em 01/09/2024 */}
            <Text fontSizes={"2xl"}>2023</Text>
            <div className="date-wrapper">
                <Button
                    size="md"
                    css={customButtonStyle}
                    onClick={() => changeMonthLeft()}
                >
                    <svg
                        width="30px"
                        height="30px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="68"
                            d="M328 112L184 256l144 144"
                        />
                    </svg>
                </Button>
                <Text as="h3" css={customTextStyle}>
                    {month.name}
                </Text>
                <Button
                    size={"md"}
                    css={customButtonStyle}
                    onClick={() => changeMonthRight()}
                >
                    <svg
                        width="30px"
                        height="30px"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="68"
                            d="M184 112l144 144-144 144"
                        />
                    </svg>
                </Button>
            </div>
        </div>
    );
};
