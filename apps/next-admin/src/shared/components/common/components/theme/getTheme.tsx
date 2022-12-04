import { Theme } from './useTheme'

export const getTheme = (key: string, fallback: string) => {
  let theme
  try {
    theme = localStorage.getItem(key) || fallback
  } catch (e) {
    // Unsupported
  }
  return (theme || fallback) as Theme
}
