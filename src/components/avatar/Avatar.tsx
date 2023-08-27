import React from "react";
import { avatarStyle } from "./avatar.style";

interface Props {
    avatar: string;
}

export type StyleProps = Parameters<typeof avatarStyle>[0];

export type AvatarProps = Props & StyleProps;

export const Avatar: React.FC<AvatarProps> = ({ avatar, size = "md" }) => {
    return (
        <div className={`${avatarStyle({ size })} avatar__wrapper`}>
            <img src={avatar} alt="" />
        </div>
    );
};
