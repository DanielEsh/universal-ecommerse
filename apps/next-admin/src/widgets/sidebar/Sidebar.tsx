'use client'
import { clsx } from 'clsx'
import { useMainStore } from '@/src/shared/model'
import { SidebarLogo } from '@/src/widgets/sidebar/SidebarLogo'
import { SidebarList } from '@/src/widgets/sidebar/SidebarList'
import { SidebarList as SidebarListType } from '@/src/widgets/sidebar/types'

import styles from './sidebar.module.css'

const list: SidebarListType[] = [
  {
    title: 'Supports',
    items: [
      {
        icon: 'chart',
        label: 'Dashboard',
      },
      {
        icon: 'chart',
        label: 'Analytics',
      },
      {
        icon: 'chart',
        label: 'Wallet',
      },
      {
        icon: 'chart',
        label: 'Notifications',
      },
      {
        icon: 'chart',
        label: 'Settings',
      },
    ],
  },
]

const list2: SidebarListType[] = [
  {
    title: 'Management',
    items: [
      {
        icon: 'chart',
        label: 'Get Help',
      },
      {
        icon: 'chart',
        label: 'Send Feedback',
      },
    ],
  },
]

export const Sidebar = () => {
  const sideBarIsToggled = useMainStore()

  const classes = clsx(styles.sidebar, {
    [styles.toggled]: sideBarIsToggled,
  })

  return (
    <div className={classes}>
      <SidebarLogo />

      <nav>
        <SidebarList list={list} />
        <SidebarList list={list2} />
      </nav>
    </div>
  )
}
