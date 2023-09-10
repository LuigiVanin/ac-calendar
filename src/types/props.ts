import React from "react";
import { Day } from "../modules/calendar";

export interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children?: React.ReactNode | any;
}

export interface SvgProps {
    size?: string;
    color?: string;
}

export type DayProps = Props & { day: Day; selected?: boolean };

export interface ModalProps {
    children: React.ReactNode;
    openModal: boolean;
    disableModal: () => void;
    layoutId?: string;
}
