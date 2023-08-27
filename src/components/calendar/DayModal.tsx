import React, { useMemo, useState } from "react";
import { ModalProps } from "../../types/props";
import { Modal } from "../modal/Modal";
import { Day } from "../../modules/calendar";
import { Avatar } from "../avatar/Avatar";
import { Text } from "../typography";
import { css, keyframes } from "../../../stitches.config";
import { Button } from "../button/Button";

interface DayModalProps extends Omit<ModalProps, "children"> {
    day: Day;
}

const rotationAnimation = keyframes({
    "0%": {
        transform: "rotate(0deg)",
    },
    "100%": {
        transform: "rotate(360deg)",
    },
});

const modalBody = css({
    width: "100%",
    // background: "red",
    ".row": {
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        height: "100%",
    },
    ".column": {
        display: "flex",
        flexDirection: "column",
        flex: 1,

        button: {
            marginTop: "auto",
        },
    },
    h1: {
        marginTop: "25px",
        height: "auto",
    },
    ".modal__body__avatar-wrapper": {
        borderRadius: "$rounded",
        width: "185px",
        height: "185px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "101%",
            height: "101%",
            borderRadius: "$rounded",
            // background: "red",

            background:
                "linear-gradient(45deg, rgb(2, 91, 36) 0%, rgb(22, 163, 74) 20%, rgb(74, 222, 128) 50%, rgb(163, 230, 53) 100%)",
            animation: `${rotationAnimation} 5s ease-in infinite`,
        },

        ".avatar__wrapper": {
            zIndex: 10,
        },
    },
});

export const DayModal: React.FC<DayModalProps> = ({ day, ...props }) => {
    const [currentBirthdayIndex] = useState(0);
    const currentBirthday = useMemo(
        () => day.birthdays[currentBirthdayIndex],
        [day, currentBirthdayIndex]
    );

    return (
        <Modal {...props}>
            <div className={modalBody()}>
                <div className="row">
                    <div className="modal__body__avatar-wrapper">
                        <Avatar
                            avatar={currentBirthday.getPerson().avatar}
                            size="7xl"
                        />
                    </div>
                    <div className="column">
                        <div className="modal__body__title">
                            <Text as="h1" fontSizes={"2xl"}>
                                {currentBirthday.getPerson().name}
                            </Text>
                            <Text as="h2" fontSizes={"lg"}>
                                (Nickname:{" "}
                                {currentBirthday.getPerson().nickname})
                            </Text>
                        </div>
                        <Button size={"lg"}>
                            De Parabens para{" "}
                            {currentBirthday.getPerson().nickname}
                        </Button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
