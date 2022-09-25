import { HeaderBreadcrumbs } from '@/components/layouts/header/HeaderBreadcrumbs'
import { Switch } from '@/ui/switch/Switch'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export const Header = () => {
    const handleChange = (value: boolean) => {
        console.log('CHANGE', value)
    }

    return (
        <div className="sticky top-0 bg-gray-200 w-full h-[100px] dark:bg-neutral-900 dark:text-white">
            <HeaderBreadcrumbs />
            <Switch checked onCheckedChange={handleChange} />
            <ThemeSwitcher />
        </div>
    )
}
