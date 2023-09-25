import type { Meta, StoryObj } from "@storybook/react";
import { Birthday, Day, StringDateFormat } from "../modules/calendar";
import { CalendarDay } from "../components/calendar/Day";
import { css } from "../../stitches.config";
import moment from "moment";

const ulDayStory = css({
    listStyle: "none",
    listStyleType: "none !important",
    paddingLeft: "0px !important",
    width: "150px",

    "span ": {
        ul: {
            listStyle: "none",
            paddingLeft: "0px !important",
            listStyleType: "none !important",

            li: {
                aspectRatio: "1 / 1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
        },
        p: {
            marginBottom: "0px !important",
        },
    },
});

const dayString = "2023-09-20" as StringDateFormat;
const todayString = moment().format("YYYY-MM-DD") as StringDateFormat;

const birthday = new Birthday({
    name: "Luis Felipe Vanin",
    nickname: "Vanin",
    birthday: dayString,
    email: "vanin@gmail.com",
    phone: "999999999",
    avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
});
const todayBirthday = new Birthday({
    name: "Luis Felipe Vanin",
    nickname: "Vanin",
    birthday: todayString,
    email: "aaaaa@gmail.com",
    phone: "999999999",
    avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
});

const dataDay = new Day(dayString);
const today = new Day(todayString);
const todayBirthdayDay = new Day(todayString);
todayBirthdayDay.addBirthday(todayBirthday);
dataDay.addBirthday(birthday);

const meta: Meta<typeof CalendarDay> = {
    title: "Component/Calendar/Day",
    parameters: {
        layout: "centered",
    },
    component: CalendarDay,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <ul className={ulDayStory()}>
                <li>
                    <Story />
                </li>
            </ul>
        ),
    ],
    argTypes: {
        day: {
            type: "symbol",
            defaultValue: dataDay,
            description: "Day content",
            name: "day",
        },
    },
};

type Story = StoryObj<typeof meta>;

export const DayStory: Story = {
    args: {
        day: dataDay,
    },
};

export const TodayStory: Story = {
    args: {
        day: today,
    },
};

export const NoBirthdayStory: Story = {
    args: {
        day: new Day("2023-08-20" as StringDateFormat),
    },
};

export const BirthdayStory: Story = {
    args: {
        day: todayBirthdayDay,
    },
};

export default meta;
