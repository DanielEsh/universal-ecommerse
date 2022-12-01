'use client'

export const Header = () => {
  const handleButtonClick = () => {
    console.log('Click')
  }

  return (
    <header className="fixed flex h-[64px] w-full items-center bg-green-400 px-6">
      <button onClick={handleButtonClick}>TOGGLE SIDEBAR</button>
      <div>HEADER</div>
    </header>
  )
}
