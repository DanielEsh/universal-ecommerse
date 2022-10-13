import { ReactNode, forwardRef, useRef } from 'react'
const { motion } = require('framer-motion')
import { useComposedRefs } from '../../../../utils/ui/compose-refs/composeRefs'
import { BaseModal } from './BaseModal'

export type SheetModalProps = {
    children: ReactNode
    containerEl?: HTMLElement
    isOpen?: boolean
    onExit: () => void
}

const COMPONENT_NAME = 'Dialog'

const swipeUp = {
    initial: {
        y: '100%',
    },
    animate: {
        y: '0',
        transition: {
            delay: 0.1,
            duration: 0.3,
        },
    },
    exit: {
        y: '100%',
    },
}

export const Dialog = forwardRef<HTMLElement, SheetModalProps>(
    (props, forwardedRef) => {
        const { children, isOpen, onExit } = props

        const defaultRef = useRef<HTMLElement>(null)

        const composedRef = useComposedRefs(defaultRef, forwardedRef)

        return (
            <BaseModal isOpen={isOpen} onExit={onExit}>
                <motion.div
                    ref={composedRef}
                    className="absolute top-1/2 left-1/2 -translate-1/2 p-8 bg-slate-50"
                    variants={swipeUp}
                    {...swipeUp}>
                    {children}
                </motion.div>
            </BaseModal>
        )
    },
)

Dialog.displayName = COMPONENT_NAME
