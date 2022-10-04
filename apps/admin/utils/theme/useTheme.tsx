import { useState, useEffect, useCallback } from 'react'
import { getTheme } from './getTheme'
import { getSystemTheme } from './getSystemTheme'

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

    const applyTheme = useCallback((theme) => {
        let resolved = theme
        setThemeState(theme)
        if (!resolved) return

        // If theme is system, resolve it before setting theme
        if (theme === 'system') {
            resolved = getSystemTheme()
        }

        const d = document.documentElement

        d.classList.add('dark')

        const fallback = colorSchemes.includes(DEFAULT_THEME)
            ? DEFAULT_THEME
            : null
        const colorScheme = colorSchemes.includes(resolved) ? theme : fallback
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        d.style.colorScheme = colorScheme
    }, [])

    const changeTheme = (changedTheme) => {
        const themesActions = {
            dark: () => console.log('DARK CHANGE'),
            light: () => console.log('LIGHT CHANGE'),
            system: () => console.log('SYSTEM CHANGE'),
        }

        themesActions[changedTheme]()

        applyTheme(changedTheme)
    }

    useEffect(() => {
        applyTheme(theme)
    }, [])

    return { theme, changeTheme }
}
