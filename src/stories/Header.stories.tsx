import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/header/Header";
import { ThemeProvider } from "../context/ThemeContext";

const meta: Meta<typeof Header> = {
    title: "Layout/Header",
    parameters: {
        layout: "fullscreen",
    },
    component: Header,
    tags: ["autodocs"],
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

type Story = StoryObj<typeof meta>;

export const story: Story = {
    render() {
        return <Header />;
    },
};

export default meta;
