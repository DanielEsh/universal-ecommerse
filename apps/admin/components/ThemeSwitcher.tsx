import { useEffect } from 'react'
import { useTheme } from '../utils/theme/useTheme'

export const ThemeSwitcher = () => {
    const { theme, applyTheme } = useTheme()

    useEffect(() => {
        console.log('THEME', theme)
    }, [theme])

    return (
        <div className="flex gap-3">
            <button onClick={() => applyTheme('light')}>Light</button>
            <button onClick={() => applyTheme('dark')}>Dark</button>
            <button onClick={() => applyTheme('system')}>System</button>
        </div>
    )
}
