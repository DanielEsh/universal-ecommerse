import { canUseDom } from '../ui/canUseDom'

const MEDIA = '(prefers-color-scheme: dark)'

export const getSystemTheme = (
    event?: MediaQueryList | MediaQueryListEvent,
) => {
    if (!canUseDom()) return
    if (!event) event = window.matchMedia(MEDIA)
    const isDark = event.matches
    return isDark ? 'dark' : 'light'
}
