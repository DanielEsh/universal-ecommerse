'use client'
import { toggleSidebar } from '@/src/shared/model'
import { HeaderBreadcrumbs } from '@/src/shared/components/common/components/header/HeaderBreadcrumbs'
import { HeaderUser } from '@/src/shared/components/common/components/header/HeaderUser'
import { ThemeSwitcher } from '@/src/shared/components/common/components/ThemeSwitcher'

export const Header = () => {
  const handleButtonClick = () => {
    toggleSidebar()
  }

  return (
    <header className="content-w fixed flex h-[64px] items-center justify-between border-b border-gray-300 bg-white/50 px-6 backdrop-blur backdrop-saturate-150">
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
