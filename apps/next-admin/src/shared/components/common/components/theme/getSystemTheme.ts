import { Theme } from './useTheme'

const MEDIA = '(prefers-color-scheme: dark)'

export const canUseDom = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    typeof window.document !== 'undefined' &&
    typeof window.document.createElement !== 'undefined'
  )
}

export const getSystemTheme = (
  event?: MediaQueryList | MediaQueryListEvent,
) => {
  if (!canUseDom()) return Theme.dark
  if (!event) event = window.matchMedia(MEDIA)
  const isDark = event.matches
  return isDark ? Theme.dark : Theme.light
}
