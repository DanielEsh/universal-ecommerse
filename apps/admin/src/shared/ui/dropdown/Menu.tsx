import { forwardRef, ReactNode } from 'react'

export type Props = {}

export type ItemProps = {
    children: ReactNode
}

const COMPONENT_NAME = 'Menu'

const MenuItem = ({ children }: ItemProps) => {
    return <div>{children}</div>
}

const MenuGroup = ({ children }: ItemProps) => {
    return <div>{children}</div>
}

export const Menu = forwardRef<HTMLElement, Props>((props, forwardedRef) => {
    return (
        <div>
            <MenuGroup>Group name</MenuGroup>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
        </div>
    )
})

Menu.displayName = 'Menu'
