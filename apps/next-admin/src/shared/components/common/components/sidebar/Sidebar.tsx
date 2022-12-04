'use client'
import { clsx } from 'clsx'
import { useSidebar } from '@/src/shared/model'
import { SidebarLogo } from '@/src/shared/components/common/components/sidebar/SidebarLogo'
import { SidebarList } from '@/src/shared/components/common/components/sidebar/SidebarList'
import { SidebarList as SidebarListType } from '@/src/shared/components/common/components/sidebar/types'

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
  const sidebar = useSidebar()

  const classes = clsx(styles.sidebar, {
    [styles.toggled]: sidebar,
  })

  return (
    <div className={classes}>
      <SidebarLogo />

      <div>{sidebar ? <div>Toggled</div> : <div>Full</div>}</div>

      <nav>
        <SidebarList list={list} />
        <hr />
        <SidebarList list={list2} />
      </nav>
    </div>
  )
}
