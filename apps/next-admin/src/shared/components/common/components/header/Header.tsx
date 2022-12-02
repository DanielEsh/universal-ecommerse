'use client'
import { toggleSidebar } from '@/src/shared/model'

export const Header = () => {
  const handleButtonClick = () => {
    toggleSidebar()
  }

  return (
    <header className="fixed flex h-[64px] w-full items-center bg-green-400 px-6">
      <button onClick={handleButtonClick}>TOGGLE SIDEBAR</button>
      <div className="ml-6">HEADER</div>
    </header>
  )
}
