import { useEffect } from 'react'
import { useTheme, Theme } from './theme/useTheme'

export const ThemeSwitcher = () => {
  const { theme, applyTheme } = useTheme()

  useEffect(() => {
    console.log('THEME', theme)
  }, [theme])

  return (
    <div className="flex gap-3">
      <button onClick={() => applyTheme(Theme.light)}>Light</button>
      <button onClick={() => applyTheme(Theme.dark)}>Dark</button>
      <button onClick={() => applyTheme(Theme.system)}>System</button>
    </div>
  )
}
