import React from "react";
import { avatarStyle } from "./avatar.style";

interface Props {
    avatar: string;
}

export const Avatar: React.FC<Props> = ({ avatar }) => {
    return (
        <div className={avatarStyle()}>
            <img src={avatar} alt="" />
        </div>
    );
};
