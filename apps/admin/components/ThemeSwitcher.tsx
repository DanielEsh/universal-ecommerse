import { useEffect } from 'react'
import { useTheme } from '../utils/theme/useTheme'

export const ThemeSwitcher = () => {
    const { theme, changeTheme } = useTheme()

    useEffect(() => {
        console.log('THEME', theme)
    }, [theme])

    return (
        <div className="flex gap-3">
            <button onClick={() => changeTheme('light')}>Light</button>
            <button onClick={() => changeTheme('dark')}>Dark</button>
            <button onClick={() => changeTheme('system')}>System</button>
        </div>
    )
}
