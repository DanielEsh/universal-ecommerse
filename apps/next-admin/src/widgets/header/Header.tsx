'use client'

import { clsx } from 'clsx'

import { toggleSidebarFx, useMainStore } from '@/src/shared/model'
import { HeaderBreadcrumbs } from '@/src/widgets/header/HeaderBreadcrumbs'
import { HeaderUser } from '@/src/widgets/header/HeaderUser'
import { ThemeSwitcher } from '@/src/shared/components/common/components/ThemeSwitcher'

import styles from '@/src/widgets/header/header.module.css'

export const Header = () => {
  const sideBarIsToggled = useMainStore()
  // bg-white/50 backdrop-blur backdrop-saturate-150

  const classes = clsx(
    styles.header,
    'fixed flex h-[64px] items-center justify-between border-b border-divider-500 px-6 bg-surface-500',
    {
      [styles.toggled]: !sideBarIsToggled,
    },
  )

  const handleButtonClick = () => {
    toggleSidebarFx(sideBarIsToggled)
  }

  return (
    <header className={classes}>
      <div className="flex gap-3">
        <button onClick={handleButtonClick}>TOGGLE SIDEBAR</button>
        <HeaderBreadcrumbs />
        <ThemeSwitcher />
      </div>

      <div>
        <HeaderUser />
      </div>
    </header>
  )
}
