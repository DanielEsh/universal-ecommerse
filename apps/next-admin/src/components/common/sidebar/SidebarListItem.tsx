type SidebarListItemProps = {
    label: string
}

export const SidebarListItem = ({label}: SidebarListItemProps) => {
    return (
        <li className="flex justify-start items-center mx-4 my-2 rounded text-black">
            <span>{label}</span>
        </li>
    )
}