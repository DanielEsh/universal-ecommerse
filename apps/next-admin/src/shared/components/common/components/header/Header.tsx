'use client'
import { toggleSidebar } from '@/src/shared/model'
import { HeaderBreadcrumbs } from '@/src/shared/components/common/components/header/HeaderBreadcrumbs'
import { HeaderUser } from '@/src/shared/components/common/components/header/HeaderUser'

export const Header = () => {
  const handleButtonClick = () => {
    toggleSidebar()
  }

  return (
    <header className="content-w fixed flex h-[64px] items-center justify-between px-6">
      <div>
        <button onClick={handleButtonClick}>TOGGLE SIDEBAR</button>
        <HeaderBreadcrumbs />
      </div>

      <div>
        <HeaderUser />
      </div>
    </header>
  )
}
