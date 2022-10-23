import { createContext, type CSSProperties } from 'react'

export type DropdownContext = {
    color: string
    popoverStyles: CSSProperties
    arrowStyles: CSSProperties
}

const COMPONENT_NAME = 'DropdownContext'

export const DropdownContext = createContext<DropdownContext>({
    color: 'primary',
    popoverStyles: {},
    arrowStyles: {},
})

DropdownContext.displayName = COMPONENT_NAME
