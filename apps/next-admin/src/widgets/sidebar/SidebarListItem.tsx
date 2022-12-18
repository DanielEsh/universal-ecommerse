import { Icon } from '@/src/shared/components/common/components/icon/Icon'

import styles from './sidebar.module.css'

type SidebarListItemProps = {
  label: string
  icon?: string
}

export const SidebarListItem = ({ label, icon }: SidebarListItemProps) => {
  return (
    <li className={styles.sidebarListItem}>
      {icon && <Icon name={icon} className="h-6 w-6 shrink-0" />}
      <span>{label}</span>
    </li>
  )
}
