import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../components/badge/Badge";

const meta: Meta<typeof Badge> = {
    title: "Component/Badge",
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    component: Badge,
    argTypes: {
        children: {
            type: "string",
            defaultValue: "Header",
            description: "Header content",
            name: "children",
        },
        color: {
            options: ["info", "sucess", "danger"],
            control: "radio",
        },
        size: {
            options: ["sm", "md"],
            control: "radio",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const InfoStory: Story = {
    args: {
        children: "Badge",
        color: "info",
        size: "sm",
    },
    render(state) {
        return <Badge {...state} />;
    },
};

export const SuccessStory: Story = {
    args: {
        children: "Badge",
        color: "sucess",
        size: "md",
    },
    render(state) {
        return <Badge {...state} />;
    },
};

export const DangerStory: Story = {
    args: {
        children: "Badge",
        color: "danger",
        size: "sm",
    },
    render(state) {
        return <Badge {...state} />;
    },
};
