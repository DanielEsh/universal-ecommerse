import { Icon } from '@/src/shared/components/common/components/icon/Icon'

type SidebarListItemProps = {
  label: string
  icon?: string
}

export const SidebarListItem = ({ label, icon }: SidebarListItemProps) => {
  return (
    <li className="mx-4 my-2 flex items-center justify-start gap-2 rounded text-black">
      {icon && <Icon name={icon} className="h-6 w-6" />}
      <span>{label}</span>
    </li>
  )
}
