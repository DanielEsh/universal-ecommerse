import { HeaderBreadcrumbs } from '@/components/layouts/header/HeaderBreadcrumbs'
import { Switch } from '@/ui/switch/Switch'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export const Header = () => {
    return (
        <div className="sticky top-0 bg-gray-200 w-full h-[100px] dark:bg-neutral-900 dark:text-white">
            <HeaderBreadcrumbs />
            <Switch />
            <ThemeSwitcher />
        </div>
    )
}
