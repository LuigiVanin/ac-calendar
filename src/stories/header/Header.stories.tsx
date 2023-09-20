import { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../components/header/Header";
import { ThemeProvider } from "../../context/ThemeContext";

const meta: Meta<typeof Header> = {
    title: "Header",
    parameters: {
        layout: "fullscreen",
    },
    component: Header,
    tags: ["autodocs"],
};

type Story = StoryObj<typeof meta>;

export const story: Story = {
    render() {
        return (
            <ThemeProvider>
                <Header />
            </ThemeProvider>
        );
    },
};

export default meta;
