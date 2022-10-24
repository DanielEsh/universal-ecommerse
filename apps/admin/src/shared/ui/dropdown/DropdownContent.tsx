import { forwardRef, ReactNode, useContext } from 'react'
import { DropdownContext } from '@/src/shared/ui/dropdown/DropdownContext'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { motion } = require('framer-motion')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AnimatePresence } = require('framer-motion')

export type Props = {
    children: ReactNode
    onMouseEnter?: () => void
    onMouseLeave?: () => void
}

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
}

const COMPONENT_NAME = 'DropdownContent'

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
    (props, forwardedRef) => {
        const { children, onMouseEnter, onMouseLeave } = props

        const { popoverStyles } = useContext(DropdownContext)

        return (
            <motion.div variants={fade} {...fade}>
                <div
                    ref={forwardedRef}
                    style={popoverStyles}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}>
                    {children}
                </div>
            </motion.div>
        )
    },
)

DropdownContent.displayName = COMPONENT_NAME
