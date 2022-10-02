import { canUseDom } from '../utils/ui/canUseDom'

export const ThemeSwitcher = () => {
    if (!canUseDom()) return ''

    const DOCUMENT_ELEMENT = document.documentElement
    const THEME_CLASS_TOGGLE_TOKEN = 'dark'

    const handleSwitchTheme = () => {
        DOCUMENT_ELEMENT.classList.toggle(THEME_CLASS_TOGGLE_TOKEN)
    }

    return <div onClick={handleSwitchTheme}>Theme switcher</div>
}
