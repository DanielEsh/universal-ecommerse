import { forwardRef, ReactNode } from 'react'

export type Props = {
    children: ReactNode
}

const COMPONENT_NAME = 'DropdownTrigger'

export const DropdownTrigger = forwardRef<HTMLButtonElement, Props>(
    (props, forwardedRef) => {
        const { children } = props
        return <button ref={forwardedRef}>{children}</button>
    },
)

DropdownTrigger.displayName = COMPONENT_NAME
