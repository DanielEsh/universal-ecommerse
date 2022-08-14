import { ReactNode, forwardRef } from "react";
const { motion } = require("framer-motion");
const { AnimatePresence } = require("framer-motion");
import { Modal } from "./Modal";

export type SheetModalProps = {
  children: ReactNode;
  containerEl?: HTMLElement;
  isOpen?: boolean;
  onExit: () => void;
};

const NAME = "SheetModal";

const swipeUp = {
  hidden: {
    y: "100%",
  },
  visible: {
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
      <Modal isOpen={isOpen} onExit={onExit}>
        <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={true}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={false}
          // Fires when all exiting nodes have completed animating out
          onExitComplete={() => console.log('close')}
        >
          {isOpen && (
            <motion.div
              className="absolute bottom-0 w-full h-[90%] bg-slate-50 rounded-t-3xl"
              variants={swipeUp}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </Modal>
    );
  }
);

SheetModal.displayName = NAME;
