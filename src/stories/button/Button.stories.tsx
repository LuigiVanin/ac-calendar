import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../components/button/Button";

const meta: Meta<typeof Button> = {
    title: "Button-2",
    parameters: {
        layout: "centered",
    },
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            type: "string",
            defaultValue: "Button",
            description: "Button content",
            name: "children",
        },
        color: {
            options: ["primary", "green"],
            control: "radio",
        },
        size: {
            options: ["sm", "md", "lg"],
            control: "radio",
        },
    },
};

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary",
        color: "primary",
        disabled: false,
        onClick() {
            console.log("Primary");
        },
        size: "sm",
    },
};

export default meta;
