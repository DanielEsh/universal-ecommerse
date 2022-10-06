import { useState, useEffect, useCallback } from 'react'
import { getTheme } from './getTheme'
import { getSystemTheme } from './getSystemTheme'
import { Simulate } from 'react-dom/test-utils'
import change = Simulate.change

enum Theme {
    light = 'light',
    dark = 'dark',
    system = 'system',
}

const DEFAULT_THEME = Theme.system
const STORAGE_KEY = 'theme'
const colorSchemes = ['light', 'dark']

export const useTheme = () => {
    const [theme, setThemeState] = useState(() =>
        getTheme(STORAGE_KEY, DEFAULT_THEME),
    )

    const changeResolvedTheme = (theme) => {
        const IS_DARK = theme === 'dark'
        const d = document.documentElement

        if (IS_DARK) {
            d.classList.add('dark')
        } else {
            d.classList.remove('dark')
        }

        const colorScheme = colorSchemes.includes(theme) ? theme : DEFAULT_THEME

        d.style.colorScheme = colorScheme
    }

    const applyTheme = (theme) => {
        let resolved = theme
        setThemeState(theme)
        if (!resolved) return

        // If theme is system, resolve it before setting theme
        if (theme === 'system') {
            resolved = getSystemTheme()
        }

        changeResolvedTheme(resolved)
    }

    useEffect(() => {
        applyTheme(theme)
    }, [])

    return { theme, applyTheme }
}
