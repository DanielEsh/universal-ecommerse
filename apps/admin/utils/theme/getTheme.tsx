export const getTheme = (key: string, fallback?: string) => {
    let theme
    try {
        theme = localStorage.getItem(key) || undefined
    } catch (e) {
        // Unsupported
    }
    return theme || fallback
}
