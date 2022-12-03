'use client'
import { clsx } from 'clsx'
import { useSidebar } from '@/src/shared/model'
import { SidebarLogo } from '@/src/shared/components/common/components/sidebar/SidebarLogo'
import { SidebarList } from '@/src/shared/components/common/components/sidebar/SidebarList'
import { SidebarList as SidebarListType } from '@/src/shared/components/common/components/sidebar/types'

const list: SidebarListType[] = [
  {
    title: 'Supports',
    items: [
      {
        icon: 'chart',
        label: 'Dashboard',
      },
      {
        label: 'Analytics',
      },
      {
        label: 'Wallet',
      },
      {
        label: 'Notifications',
      },
      {
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
        label: 'Get Help',
      },
      {
        label: 'Send Feedback',
      },
    ],
  },
]

export const Sidebar = () => {
  const sidebar = useSidebar()

  const classes = clsx('sidebar fixed h-screen bg-white', {
    toggled: sidebar,
  })

  return (
    <div className={classes}>
      <SidebarLogo />

      <div>{sidebar ? <div>Toggled</div> : <div>Full</div>}</div>

      <nav className="">
        <SidebarList list={list} />
        <hr />
        <SidebarList list={list2} />
      </nav>
    </div>
  )
}
