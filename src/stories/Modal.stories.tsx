import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../components/modal/Modal";
import { useState } from "react";

const meta: Meta<typeof Modal> = {
    title: "Component/Modal",
    parameters: {
        layout: "centered",
    },
    component: Modal,
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const ParentModal = () => {
    const [state, setState] = useState(false);

    return (
        <>
            <button onClick={() => setState(!state)}>Open</button>
            <Modal openModal={state} disableModal={() => setState(false)}>
                Teste
            </Modal>
        </>
    );
};

export const ModalStory: Story = {
    args: {
        children: "Modal",
        openModal: true,
    },

    render: () => (
        <Modal openModal={true} disableModal={() => {}}>
            Modal
        </Modal>
    ),
};

export const ModalStoryWithAction: Story = {
    args: {
        children: "Modal",
        openModal: true,
    },

    render: () => <ParentModal />,
};
