import { Day } from "../modules/calendar";

export interface Props {
    children?: any;
}

export type DayProps = Props & { day: Day; selected?: boolean };

export interface ModalProps {
    children: React.ReactNode;
    openModal: boolean;
    disableModal: () => void;
    layoutId?: string;
}
