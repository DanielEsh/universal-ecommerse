import { useState, useEffect } from 'react'
import { getTheme } from './getTheme'

const DEFAULT_THEME = Theme.system
const STORAGE_KEY = 'theme'

enum Theme {
    light = 'light',
    dark = 'dark',
    system = 'system',
}

export const useTheme = () => {
    const [theme, setThemeState] = useState(() =>
        getTheme(STORAGE_KEY, DEFAULT_THEME),
    )

    const applyTheme = (theme) => {
        setThemeState(theme)

        // Save to storage
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch (e) {
            // Unsupported
        }
    }

    useEffect(() => {
        applyTheme(theme)
    }, [])

    return {theme, applyTheme}
}
