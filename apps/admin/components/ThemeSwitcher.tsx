import { canUseDom } from '../utils/ui/canUseDom'

export const ThemeSwitcher = () => {
    if (!canUseDom()) return ''

    const MEDIA = '(prefers-color-scheme: dark)'
    const DOCUMENT_ELEMENT = document.documentElement
    const THEME_CLASS_TOGGLE_TOKEN = 'dark'

    const getSystemTheme = (event?: MediaQueryList | MediaQueryListEvent) => {
        if (!event) event = window.matchMedia(MEDIA)
        const isDark = event.matches
        return isDark ? 'dark' : 'light'
    }

    console.log(getSystemTheme())

    const handleSwitchTheme = () => {
        DOCUMENT_ELEMENT.classList.toggle(THEME_CLASS_TOGGLE_TOKEN)
    }

    return <div onClick={handleSwitchTheme}>Theme switcher</div>
}
