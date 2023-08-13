import { css } from "../../../stitches.config";
import { Day } from "../../helpers/calendar";
import { Props } from "../../types/props";
import { Text } from "../typography";

type DayProps = Props & { day: Day };

const dayUnit = css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    aspectRatio: "1 / 1",
    maxWidth: "100px",
    background: "#f2f2f2",
    borderRadius: "$rounded",
    gap: "$sm",
    "&:hover": {
        background: "#e2e2e2",
    },
    p: {
        marginTop: "0px",
    },
});

export const CalendarDay: React.FC<DayProps> = ({ day }) => {
    return (
        <span className={dayUnit()}>
            <Text css={{ fontWeight: "bold" }}>{day.getDay()}</Text>
            <Text fontSizes={"lg"}>{day.getWeekday().abreviation}</Text>
        </span>
    );
};
