import { ReactNode, forwardRef } from "react";
import { BaseModal } from "./BaseModal";
const { motion } = require("framer-motion");

export type AsideModalProps = {
  children: ReactNode;
  containerEl?: HTMLElement;
  isOpen?: boolean;
  onExit: () => void;
};

const NAME = "AsideModal";

const swipeRight = {
    initial: {
      x: "100%",
    },
    animate: {
      x: "0",
      transition: {
        delay: 0.1,
        duration: 0.3,
      },
    },
    exit: {
      x: "100%",
    },
  };

export const AsideModal = forwardRef<HTMLElement, AsideModalProps>(
  (props, forwardedRef) => {
    const { children, isOpen, onExit } = props;

    return (
      <BaseModal isOpen={isOpen} onExit={onExit}>
        <motion.div 
            className="absolute top-0 right-0 w-[750px] h-full bg-slate-50"
            variants={swipeRight}
            {...swipeRight}
        >
          {children}
        </motion.div>
      </BaseModal>
    );
  }
);

AsideModal.displayName = NAME;
