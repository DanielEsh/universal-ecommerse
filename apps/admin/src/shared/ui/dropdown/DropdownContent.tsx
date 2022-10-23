import { forwardRef, ReactNode } from 'react'

export type Props = {
    children: ReactNode
}

const COMPONENT_NAME = 'DropdownContent'

export const DropdownContent = forwardRef<HTMLDivElement, Props>(
    (props, forwardedRef) => {
        const { children } = props
        return <div ref={forwardedRef}>{children}</div>
    },
)

DropdownContent.displayName = COMPONENT_NAME
