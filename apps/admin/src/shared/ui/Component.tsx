import { forwardRef } from 'react'

export type Props = {}

const COMPONENT_NAME = 'component'

export const Component = forwardRef<HTMLElement, Props>(
    (props, forwardedRef) => {
        return <div>Component</div>
    },
)

Component.displayName = COMPONENT_NAME
