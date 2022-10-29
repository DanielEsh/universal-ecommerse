import { forwardRef, ReactNode } from 'react'
import { clsx } from 'clsx'

export type Props = {
    children: ReactNode
    className?: string
}

const COMPONENT_NAME = 'Menu'

const MenuGroup = ({ children }: Props) => {
    return (
        <div className="py-1 px-3 hover:bg-blue-500 font-bold">{children}</div>
    )
}

const MenuItem = ({ children }: Props) => {
    return <div className="py-1 px-3 hover:bg-blue-500">{children}</div>
}

export const MenuRoot = forwardRef<HTMLDivElement, Props>(
    ({ children, className }, forwardedRef) => {
        const classes = clsx(
            className,
            'relative bg-white rounded-md shadow-md z-10 overflow-hidden',
        )

        return (
            <div ref={forwardedRef} className={classes}>
                {children}
            </div>
        )
    },
)

export const Menu = Object.assign(MenuRoot, {
    Group: MenuGroup,
    Item: MenuItem,
})

MenuRoot.displayName = COMPONENT_NAME
