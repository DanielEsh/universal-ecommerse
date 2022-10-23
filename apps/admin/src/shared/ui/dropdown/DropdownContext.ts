import { createContext, type CSSProperties } from 'react'

export type DropdownContext = {
    open: boolean
    color: string
    popoverStyles: CSSProperties
    arrowStyles: CSSProperties
    hidePopover?: () => void
    showPopover?: () => void
    isClickable: boolean
}

const COMPONENT_NAME = 'DropdownContext'

export const DropdownContext = createContext<DropdownContext>({
    open: false,
    color: 'primary',
    popoverStyles: {},
    arrowStyles: {},
    isClickable: true,
})

DropdownContext.displayName = COMPONENT_NAME
