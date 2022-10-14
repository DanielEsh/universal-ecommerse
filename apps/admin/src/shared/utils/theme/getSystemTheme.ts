import { canUseDom } from '../ui/canUseDom'
import { Theme } from './useTheme'

const MEDIA = '(prefers-color-scheme: dark)'

export const getSystemTheme = (
    event?: MediaQueryList | MediaQueryListEvent,
) => {
    if (!canUseDom()) return Theme.dark
    if (!event) event = window.matchMedia(MEDIA)
    const isDark = event.matches
    return isDark ? Theme.dark : Theme.light
}
