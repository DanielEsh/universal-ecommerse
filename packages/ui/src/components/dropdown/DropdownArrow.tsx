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
        className="absolute z-0 h-4 w-4 rotate-45 bg-white shadow-md"
      />
    )
  },
)

DropdownArrow.displayName = COMPONENT_NAME
