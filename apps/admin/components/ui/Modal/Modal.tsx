import { ReactNode, forwardRef, useState } from "react";
const { motion } = require("framer-motion");
const { AnimatePresence } = require("framer-motion");
import { Portal } from "../Portal";

export type ModalProps = {
  children: ReactNode;
  containerEl?: HTMLElement;
  isOpen?: boolean;
  onExit: () => void;
};

const NAME = "Modal";

const swipeUp = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Modal = forwardRef<HTMLElement, ModalProps>(
  (props, forwardedRef) => {
    const { children, containerEl, isOpen, onExit } = props;

    return (
      <Portal container={containerEl}>
        <motion.div
          className="fixed inset-0 bg-neutral-800/50 overflow-hidden"
          variants={swipeUp}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onExit}
        >
          {children}
        </motion.div>
      </Portal>
    );
  }
);

Modal.displayName = NAME;
