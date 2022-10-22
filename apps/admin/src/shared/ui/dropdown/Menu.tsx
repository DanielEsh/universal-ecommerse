import { forwardRef, ReactNode } from 'react'

export type Props = {}

export type ItemProps = {
    children: ReactNode
}

const COMPONENT_NAME = 'Menu'

const MenuItem = ({ children }: ItemProps) => {
    return <div className="py-1 px-3 hover:bg-gray-500">{children}</div>
}

const MenuGroup = ({ children }: ItemProps) => {
    return <div className="py-1  px-3 hover:bg-gray-500">{children}</div>
}

const MENU_ITEMS = [
    {
        label: 'User:',
        items: [
            {
                label: 'User Name',
            },
        ],
    },
]

export const Menu = forwardRef<HTMLElement, Props>((props, forwardedRef) => {
    return (
        <div>
            <MenuGroup>User:</MenuGroup>
            <MenuItem>User Name</MenuItem>
            <hr className="border-red-500" />
            <MenuGroup>Actions</MenuGroup>
            <MenuItem>Edit </MenuItem>
            <MenuItem>Copy</MenuItem>
            <MenuItem>Save</MenuItem>
            <MenuItem>Delete</MenuItem>
            <hr className="border-red-500" />
            <MenuGroup>Group name</MenuGroup>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
            <MenuItem>Item 4</MenuItem>
        </div>
    )
})

Menu.displayName = 'Menu'
