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
            <div className="py-2 px-5">
                <MenuGroup>User:</MenuGroup>
                <MenuItem>User Name</MenuItem>
            </div>

            <hr className="border-red-500" />

            <div className="py-2 px-5">
                <MenuGroup>Actions</MenuGroup>
                <MenuItem>Edit </MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Save</MenuItem>
                <MenuItem>Delete</MenuItem>
            </div>

            <hr className="border-red-500" />

            <div className="py-2 px-5">
                <MenuGroup>Group name</MenuGroup>
                <MenuItem>Item 1</MenuItem>
                <MenuItem>Item 2</MenuItem>
                <MenuItem>Item 3</MenuItem>
                <MenuItem>Item 4</MenuItem>
            </div>
        </div>
    )
})

Menu.displayName = 'Menu'
