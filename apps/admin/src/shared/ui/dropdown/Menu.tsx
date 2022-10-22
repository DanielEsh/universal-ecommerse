import { forwardRef, ReactNode } from 'react'

export type Props = {}

export type ItemProps = {
    children: ReactNode
}

const COMPONENT_NAME = 'Menu'

const MenuItem = ({ children }: ItemProps) => {
    return <div className="py-1 px-3 hover:bg-blue-500">{children}</div>
}

const MenuGroup = ({ children }: ItemProps) => {
    return <div className="py-1 px-3 hover:bg-blue-500">{children}</div>
}

export const Menu = forwardRef<HTMLElement, Props>((props, forwardedRef) => {
    return (
        <div className="relative bg-white rounded-md shadow-md z-10">
            <MenuGroup>User:</MenuGroup>
            <MenuItem>User Name</MenuItem>
            <hr className="border-gray-300" />
            <MenuGroup>Actions</MenuGroup>
            <MenuItem>Edit </MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Delete</MenuItem>
        </div>
    )
})

Menu.displayName = 'Menu'
