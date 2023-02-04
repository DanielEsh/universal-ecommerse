import styles from './sidebar.module.css'

type SidebarListItemProps = {
  label: string
  icon?: string
}

export const SidebarListItem = ({ label, icon }: SidebarListItemProps) => {
  return (
    <li className={styles.sidebarListItem}>
      <span>{label}</span>
    </li>
  )
}
