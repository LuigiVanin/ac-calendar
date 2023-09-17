import React, { useMemo, useState } from "react";
import { ModalProps } from "../../types/props";
import { Modal } from "../modal/Modal";
import { Day } from "../../modules/calendar";
import { Avatar } from "../avatar/Avatar";
import { Text } from "../typography";
import { Button } from "../button/Button";
import { modalBody } from "./dayModal.style";
import { WhatsAppIcon } from "../icon/WhatsAppIcon";
import { Badge } from "../badge/Badge";
import moment from "moment";
import ConfettiExplosion from "react-confetti-explosion";

interface DayModalProps extends Omit<ModalProps, "children"> {
    day: Day;
}

interface DateDiffObject {
    label: string;
    type: "sucess" | "info" | "danger";
}

export const DayModal: React.FC<DayModalProps> = ({ day, ...props }) => {
    const [currentBirthdayIndex] = useState(0);
    const currentBirthday = useMemo(
        () => day.birthdays[currentBirthdayIndex],
        [day, currentBirthdayIndex]
    );

    const todayToBirthdayDiff = useMemo(() => {
        const today = moment();
        const birthday = moment(
            `${2023}-${currentBirthday.getMonth()}-${currentBirthday.getDay()}`,
            "YYYY-MM-DD"
        );
        if (today.isSame(birthday, "day")) return 0;
        const diff = moment(birthday).diff(today, "days");
        return diff + 1;
    }, [currentBirthday]);

    const dateDiffObject = useMemo((): DateDiffObject => {
        if (!todayToBirthdayDiff) {
            return {
                label: "Hoje",
                type: "sucess",
            };
        } else if (todayToBirthdayDiff < 0) {
            return {
                label: "Já passou!",
                type: "danger",
            };
        } else {
            return {
                label: `Em ${todayToBirthdayDiff} dias`,
                type: "info",
            };
        }
    }, [todayToBirthdayDiff]);

    const onHappyBirthdayHandler = () => {
        const target = "_blank";
        const message = `
        Parabéns ${currentBirthday.getPerson().nickname}!! 
        Muitos anos de vida e muitas felicidades para você!!
        Um maravilhos ${currentBirthday.getDay()}/${currentBirthday.getMonth()}/${2023}!! 
        🥳🥳🥳🥳🥳🥳`.trim();
        window.open(
            `https://wa.me/${
                currentBirthday.getPerson().phone
            }?text=${message}`,
            target
        );
    };

    return (
        <Modal {...props}>
            {!todayToBirthdayDiff && (
                <ConfettiExplosion
                    zIndex={1000}
                    duration={3000}
                    particleCount={50}
                />
            )}
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
                            <Text as="h2" fontSizes={"lg"} color="gray">
                                (Nickname:{" "}
                                {currentBirthday.getPerson().nickname})
                            </Text>
                        </div>
                        <span className="line" />

                        <div className="modal__body__birthday">
                            <Text fontSizes="xl" as="span">
                                Aniversário:{" "}
                                <strong>
                                    {String(currentBirthday.getDay()).padStart(
                                        2,
                                        "0"
                                    )}
                                    /
                                    {String(
                                        currentBirthday.getMonth()
                                    ).padStart(2, "0")}
                                </strong>
                            </Text>
                            <Badge size="sm" color={dateDiffObject.type}>
                                {dateDiffObject.label}
                            </Badge>
                        </div>
                        <Button
                            size="lg"
                            color="green"
                            onClick={onHappyBirthdayHandler}
                            disabled={!!todayToBirthdayDiff}
                        >
                            <WhatsAppIcon size="25" color="white" />
                            <Text css={{ color: "white !important" }}>
                                De parabéns para{" "}
                                {currentBirthday.getPerson().nickname}
                            </Text>
                        </Button>
                    </div>
                </div>
            </div>
            {!todayToBirthdayDiff && (
                <ConfettiExplosion
                    zIndex={1000}
                    duration={3000}
                    particleCount={50}
                />
            )}
        </Modal>
    );
};
