import { createContext, type CSSProperties, } from 'react'

export type DropdownContext = {
    open: boolean
    color: string
    popoverStyles: CSSProperties
    withArrow: boolean
    arrowStyles: CSSProperties
    arrowRef?: any
    referenceRef?: any
    floatingRef?: any
    hidePopover?: () => void
    showPopover?: () => void
    handleFloatingEnter?: () => void
    handleFloatingLeave?: () => void
    isClickable: boolean
}

const COMPONENT_NAME = 'DropdownContext'

export const DropdownContext = createContext<DropdownContext>({
    open: false,
    color: 'primary',
    popoverStyles: {},
    withArrow: true,
    arrowStyles: {},
    isClickable: true,
})

DropdownContext.displayName = COMPONENT_NAME
