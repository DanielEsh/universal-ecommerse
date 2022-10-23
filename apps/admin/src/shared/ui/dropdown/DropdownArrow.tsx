import { forwardRef } from 'react'

const COMPONENT_NAME = 'DropdownArrow'

export const DropdownArrow = forwardRef<HTMLDivElement>(
    (props, forwardedRef) => {
        return (
            <div
                ref={forwardedRef}
                className="absolute z-0 w-4 h-4 bg-white shadow-md rotate-45"
            />
        )
    },
)

DropdownArrow.displayName = COMPONENT_NAME
