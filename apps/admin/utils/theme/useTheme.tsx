import { useState, useEffect } from 'react'
import { getTheme } from './getTheme'

enum Theme {
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

    const applyTheme = (theme) => {
        setThemeState(theme)

        // Save to storage
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch (e) {
            // Unsupported
        }
    }

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
