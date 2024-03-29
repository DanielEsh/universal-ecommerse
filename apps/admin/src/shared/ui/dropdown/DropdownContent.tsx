import { forwardRef, ReactNode, useContext, useRef } from 'react'
import { DropdownContext } from '@/src/shared/ui/dropdown/DropdownContext'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { motion } = require('framer-motion')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { AnimatePresence } = require('framer-motion')
import { DropdownArrow } from '@/src/shared/ui/dropdown/DropdownArrow'

import { composeRefs } from '@/src/shared/utils/ui/compose-refs/composeRefs'
import { Portal } from '@/src/shared/ui/Portal'
import { useOnClickOutside } from '@/src/shared/utils/ui/useClickOutside'

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

        const {
            popoverStyles,
            floatingRef,
            handleFloatingEnter,
            handleFloatingLeave,
            withArrow,
            arrowRef,
            containerEl,
            open,
            hidePopover,
        } = useContext(DropdownContext)

        const defaultRef = useRef<any>()

        const ref = composeRefs(defaultRef, floatingRef, forwardedRef)
        useOnClickOutside(defaultRef, () => {
            if (open && hidePopover) {
                hidePopover()
            }
        })

        return open ? (
            <Portal container={containerEl}>
                <motion.div variants={fade} {...fade}>
                    <div
                        ref={ref}
                        style={popoverStyles}
                        onMouseEnter={handleFloatingEnter}
                        onMouseLeave={handleFloatingLeave}>
                        {children}

                        {withArrow && <DropdownArrow ref={arrowRef} />}
                    </div>
                </motion.div>
            </Portal>
        ) : null
    },
)

DropdownContent.displayName = COMPONENT_NAME
