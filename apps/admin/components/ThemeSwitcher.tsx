import { useTheme } from 'next-themes'

export const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme

    const handleSwitchTheme = () => {
        const switcherTheme = currentTheme === 'light' ? 'dark' : 'light'
        setTheme(switcherTheme)
    }

    return <div onClick={handleSwitchTheme}>Theme switcher</div>
}
