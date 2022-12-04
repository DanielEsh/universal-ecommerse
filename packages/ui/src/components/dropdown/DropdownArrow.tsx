import { forwardRef, useContext } from 'react'
import { DropdownContext } from './DropdownContext'

const COMPONENT_NAME = 'DropdownArrow'

export const DropdownArrow = forwardRef<HTMLDivElement>(
    (props, forwardedRef) => {
        const { arrowStyles } = useContext(DropdownContext)

        return (
            <div
                ref={forwardedRef}
                style={arrowStyles}
                className="absolute z-0 w-4 h-4 bg-white shadow-md rotate-45"
            />
        )
    },
)

DropdownArrow.displayName = COMPONENT_NAME
