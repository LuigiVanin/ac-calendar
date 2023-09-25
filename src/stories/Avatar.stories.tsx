import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../components/avatar/Avatar";

const meta: Meta<typeof Avatar> = {
    title: "Component/Avatar",
    parameters: {
        layout: "centered",
    },
    component: Avatar,
    tags: ["autodocs"],
    argTypes: {
        size: {
            options: [
                "sm",
                "md",
                "lg",
                "xl",
                "2xl",
                "3xl",
                "4xl",
                "5xl",
                "6xl",
            ],
            control: "select",
        },
        avatar: {
            type: "string",
            defaultValue:
                "https://avatars.githubusercontent.com/u/20628079?v=4",
            description: "Avatar content",
            name: "avatar",
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AvatarStorySm: Story = {
    args: {
        size: "sm",
        avatar: "https://avatars.githubusercontent.com/u/20628079?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStoryMd: Story = {
    args: {
        size: "md",
        avatar: "https://avatars.githubusercontent.com/u/20628079?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStoryLg: Story = {
    args: {
        size: "lg",
        avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStoryXl: Story = {
    args: {
        size: "xl",
        avatar: "https://avatars.githubusercontent.com/u/20628079?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStory2Xl: Story = {
    args: {
        size: "2xl",
        avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStory3Xl: Story = {
    args: {
        size: "3xl",
        avatar: "https://avatars.githubusercontent.com/u/20628079?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};

export const AvatarStory7Xl: Story = {
    args: {
        size: "7xl",
        avatar: "https://avatars.githubusercontent.com/u/49759902?v=4",
    },
    render(state) {
        return <Avatar {...state} />;
    },
};
