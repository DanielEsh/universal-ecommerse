import { forwardRef, ReactNode, useContext } from 'react'
import { DropdownContext } from '@/src/shared/ui/dropdown/DropdownContext'
import { composeRefs } from '@/src/shared/utils/ui/compose-refs/composeRefs'

export type Props = {
    children: ReactNode
}

const COMPONENT_NAME = 'DropdownTrigger'

export const DropdownTrigger = forwardRef<HTMLButtonElement, Props>(
    (props, forwardedRef) => {
        const { children } = props

        const { isClickable, showPopover, hidePopover, referenceRef } =
            useContext(DropdownContext)

        const handleClick = () => {
            if (isClickable && showPopover) {
                showPopover()
            }
        }

        const handleMouseEnter = () => {
            if (!isClickable && showPopover) {
                showPopover()
            }
        }

        const handleMouseLeave = () => {
            if (!isClickable && hidePopover) {
                hidePopover()
            }
        }
        return (
            <button
                ref={composeRefs(referenceRef, forwardedRef)}
                onClick={handleClick}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                {children}
            </button>
        )
    },
)

DropdownTrigger.displayName = COMPONENT_NAME
