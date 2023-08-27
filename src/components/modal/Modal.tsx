import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { backdropModal } from "./modal.styles";
import { ModalProps as Props } from "../../types/props";

export const Modal: React.FC<Props> = ({
    children,
    openModal,
    disableModal,
    layoutId,
}) => {
    return (
        <AnimatePresence mode="popLayout">
            {openModal && (
                <motion.div
                    className={backdropModal()}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        key="modal"
                        layoutId={layoutId}
                        className="modal"
                    >
                        <button
                            className="modal__close"
                            onClick={() => disableModal()}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="42"
                                    d="M368 368L144 144M368 144L144 368"
                                />
                            </svg>
                        </button>
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
