import { canUseDom } from '../utils/ui/canUseDom'

export const ThemeSwitcher = () => {
    if (!canUseDom()) return ''

    const MEDIA = '(prefers-color-scheme: dark)'
    const DOCUMENT_ELEMENT = document.documentElement
    const THEME_CLASS_TOGGLE_TOKEN = 'dark'
    const COLORS_SCHEMES_LIST = ['light', 'dark']
    const DEFAULT_THEME = 'system'

    const getSystemTheme = (event?: MediaQueryList | MediaQueryListEvent) => {
        if (!event) event = window.matchMedia(MEDIA)
        const isDark = event.matches
        return isDark ? 'dark' : 'light'
    }

    const resolvedTheme = getSystemTheme()

    const handleSwitchTheme = () => {
        DOCUMENT_ELEMENT.classList.toggle(THEME_CLASS_TOGGLE_TOKEN)
        const currentColorScheme = COLORS_SCHEMES_LIST.includes(resolvedTheme)
            ? resolvedTheme
            : DEFAULT_THEME

        DOCUMENT_ELEMENT.style.colorScheme = currentColorScheme
    }

    return <div onClick={handleSwitchTheme}>Theme switcher</div>
}
