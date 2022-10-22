import { forwardRef, ReactNode } from 'react'

export type Props = {
    children: ReactNode
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
    ({ children }, forwardedRef) => {
        return (
            <div
                ref={forwardedRef}
                className="relative bg-white rounded-md shadow-md z-10 overflow-hidden">
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
