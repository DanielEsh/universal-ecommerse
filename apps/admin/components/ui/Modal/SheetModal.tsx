import { ReactNode, forwardRef } from "react";
const { motion } = require("framer-motion");
import { BaseModal } from "./BaseModal";

export type SheetModalProps = {
  children: ReactNode;
  containerEl?: HTMLElement;
  isOpen?: boolean;
  onExit: () => void;
};

const NAME = "SheetModal";

const swipeUp = {
  initial: {
    y: "100%",
  },
  animate: {
    y: "0",
    transition: {
      delay: 0.1,
      duration: 0.3,
    },
  },
  exit: {
    y: "100%",
  },
};

export const SheetModal = forwardRef<HTMLElement, SheetModalProps>(
  (props, forwardedRef) => {
    const { children, isOpen, onExit } = props;

    return (
      <BaseModal isOpen={isOpen} onExit={onExit}>
        <motion.div
          className="absolute bottom-0 w-full h-[90%] bg-slate-50 rounded-t-3xl"
          variants={swipeUp}
          {...swipeUp}
        >
          {children}
        </motion.div>
      </BaseModal>
    );
  }
);

SheetModal.displayName = NAME;
