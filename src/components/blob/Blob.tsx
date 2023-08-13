import { blob } from "./blob.style";
import { motion } from "framer-motion";

export const SimpleBlob = () => {
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
                duration: 20,
            }}
        />
    );
};
