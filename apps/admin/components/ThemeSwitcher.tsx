import { useState, useCallback, useEffect } from 'react'
import { canUseDom } from '../utils/ui/canUseDom'

enum Theme {
    light = 'light',
    dark = 'dark',
    system = 'system',
}

export const ThemeSwitcher = () => {
    const THEME_CLASS_TOGGLE_TOKEN = 'dark'
    const COLORS_SCHEMES_LIST = ['light', 'dark']
    const DEFAULT_THEME = Theme.system
    const MEDIA = '(prefers-color-scheme: dark)'
    const STORAGE_KEY = 'theme'

    const [theme, setThemeState] = useState(() =>
        getTheme(STORAGE_KEY, DEFAULT_THEME),
    )
    const [resolvedTheme, setResolvedTheme] = useState(() =>
        getTheme(STORAGE_KEY),
    )

    function applyTheme(theme) {
        setThemeState(theme)

        // Save to storage
        try {
            localStorage.setItem(STORAGE_KEY, theme)
        } catch (e) {
            // Unsupported
        }
    }

    if (!canUseDom()) return ''

    const DOCUMENT_ELEMENT = document.documentElement

    const getSystemTheme = (event?: MediaQueryList | MediaQueryListEvent) => {
        if (!event) event = window.matchMedia(MEDIA)
        const isDark = event.matches
        return isDark ? 'dark' : 'light'
    }

    function getTheme(key: string, fallback?: string) {
        let theme
        try {
            theme = localStorage.getItem(key) || undefined
        } catch (e) {
            // Unsupported
        }
        return theme || fallback
    }

    // const resolvedTheme = getSystemTheme()

    const handleLight = () => {
        applyTheme('light')
        DOCUMENT_ELEMENT.classList.remove(THEME_CLASS_TOGGLE_TOKEN)
    }

    const handleDark = () => {
        applyTheme('dark')
        DOCUMENT_ELEMENT.classList.add(THEME_CLASS_TOGGLE_TOKEN)
        const currentColorScheme = COLORS_SCHEMES_LIST.includes(theme)
            ? resolvedTheme
            : DEFAULT_THEME
        DOCUMENT_ELEMENT.style.colorScheme = currentColorScheme as string
    }

    const handleSystem = () => {
        applyTheme('system')
    }

    return (
        <div className="flex gap-3">
            <button onClick={handleLight}>Light</button>
            <button onClick={handleDark}>Dark</button>
            <button onClick={handleSystem}>System</button>
        </div>
    )
}
