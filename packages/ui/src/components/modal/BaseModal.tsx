import { ReactNode, forwardRef, useRef, useEffect } from 'react'
const { motion } = require('framer-motion')
const { AnimatePresence } = require('framer-motion')
import { Portal } from '../Portal'
import { useOnClickOutside } from '../../utils/ui/useClickOutside'
import { useKeyPress } from '../../utils/ui/useKeyPress'
import { useLockedBody } from '../../utils/ui/useLockedBody'

export type BaseModalProps = {
    children: ReactNode
    containerEl?: HTMLElement
    isOpen?: boolean
    onExit?: () => void
}

const COMPONENT_NAME = 'BaseModal'

export const BaseModal = forwardRef<HTMLElement, BaseModalProps>(
    (props, forwardedRef) => {
        const { children, containerEl, isOpen, onExit } = props
        const [locked, setLocked] = useLockedBody(isOpen)

        const defaultRef = useRef<HTMLElement>(null)
        const childrenRef = useRef(null)

        const Close = () => {
            if (!isOpen) return

            setLocked(isOpen)
            if (onExit) onExit()
        }

        // @ts-ignore
        useOnClickOutside(childrenRef, () => Close())

        useKeyPress('Escape', Close)

        return (
            <Portal container={containerEl}>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            ref={defaultRef}
                            className="fixed inset-0 bg-neutral-800/50 overflow-hidden"
                            variants={fade}
                            {...fade}
                        >
                            <div ref={childrenRef}>{children}</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Portal>
        )
    },
)

BaseModal.displayName = COMPONENT_NAME
