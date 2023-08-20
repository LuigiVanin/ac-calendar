import React from "react";
import { blob } from "./blob.style";
import { motion } from "framer-motion";

interface BlobProps {
    delay: number;
    duration: number;
}

export const SimpleBlob: React.FC<BlobProps> = ({
    delay = 0,
    duration = 20,
}) => {
    return (
        <motion.div
            className={blob()}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 360, 0, 270, 0],
                // borderRadius: ["30%", "40%", "50%", "40%", "30%"],
            }}
            transition={{
                repeat: Infinity,
                duration,
                delay: delay,
            }}
        />
    );
};
