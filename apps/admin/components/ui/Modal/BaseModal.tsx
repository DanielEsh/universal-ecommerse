import { ReactNode, forwardRef, useState } from "react";
const { motion } = require("framer-motion");
const { AnimatePresence } = require("framer-motion");
import { Portal } from "../Portal";

export type BaseModalProps = {
  children: ReactNode;
  containerEl?: HTMLElement;
  isOpen?: boolean;
  onExit: () => void;
};

const NAME = "BaseModal";

const fade = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const BaseModal = forwardRef<HTMLElement, BaseModalProps>(
  (props, forwardedRef) => {
    const { children, containerEl, isOpen, onExit } = props;

    return (
      <Portal container={containerEl}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-neutral-800/50 overflow-hidden"
              onClick={onExit}
              variants={fade}
              {...fade}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Portal>
    );
  }
);

BaseModal.displayName = NAME;
