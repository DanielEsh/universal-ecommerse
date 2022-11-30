import { Icon } from '@/src/shared/components/common/icon/Icon'

type SidebarListItemProps = {
  label: string
  icon?: string
}

export const SidebarListItem = ({ label, icon }: SidebarListItemProps) => {
  return (
    <li className="flex justify-start items-center gap-2 mx-4 my-2 rounded text-black">
      {icon && <Icon name={icon} className="w-6 h-6" />}
      <span>{label}</span>
    </li>
  )
}
