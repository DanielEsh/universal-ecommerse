import { useState, useEffect } from 'react'
import { getTheme } from './getTheme'
import { getSystemTheme } from './getSystemTheme'

export enum Theme {
  light = 'light',
  dark = 'dark',
  system = 'system',
}

const DEFAULT_THEME = Theme.system
const STORAGE_KEY = 'theme'

export const useTheme = () => {
  const [theme, setThemeState] = useState(() =>
    getTheme(STORAGE_KEY, DEFAULT_THEME),
  )

  const changeResolvedTheme = (theme: Theme) => {
    const DOCUMENT = document.documentElement

    DOCUMENT.className = theme
  }

  const applyTheme = (theme: Theme) => {
    let resolved: Theme = theme
    setThemeState(theme)
    localStorage.setItem(STORAGE_KEY, theme)
    if (!resolved) return

    if (theme === Theme.system) {
      resolved = getSystemTheme()
    }

    changeResolvedTheme(resolved)
  }

  useEffect(() => {
    applyTheme(theme)
  }, [])

  return { theme, applyTheme }
}
