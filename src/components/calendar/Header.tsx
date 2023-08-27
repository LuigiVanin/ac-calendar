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
    gap: "$lg",
    borderBottom: "3px solid #e1e1e15c",
    paddingBottom: "25px",
});

const customButtonStyle: ButtonCss = {
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
            <Button
                size={"md"}
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
    );
};
