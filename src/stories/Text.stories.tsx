import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../components/typography/Typography";

const meta: Meta<typeof Text> = {
    title: "Component/Text",
    tags: ["autodocs"],
    argTypes: {
        children: {
            type: "string",
            defaultValue: "Text",
            description: "Text content",
            name: "children",
        },
        color: {
            options: ["contrast", "blue", "gray", "normal"],
            control: "radio",
        },
        fontSizes: {
            options: ["sm", "md", "lg", "xl", "2xl", "3xl"],
            control: "select",
        },
    },
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextStory: Story = {
    args: {
        children: "Text",
        color: "contrast",
        fontSizes: "xl",
    },

    render(state) {
        return <Text {...state} />;
    },
};
