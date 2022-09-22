// import { HeaderBreadcrumbs } from '@/components/layouts/header/HeaderBreadcrumbs'
import { Breadcrumbs } from '@/ui/breadcrumbs/Breadcrumbs'
import { ThemeSwitcher } from '@/components/ThemeSwitcher'

export const Header = () => {
    return (
        <div className="sticky top-0 bg-gray-200 w-full h-[100px] dark:bg-neutral-900 dark:text-white">
            <Breadcrumbs separator=">">
                <Breadcrumbs.Item>Item 1</Breadcrumbs.Item>
                <Breadcrumbs.Item>Item 2</Breadcrumbs.Item>
                <Breadcrumbs.Item isLast>Item 3</Breadcrumbs.Item>
            </Breadcrumbs>
            <Breadcrumbs>
                <Breadcrumbs.Item>Item 1</Breadcrumbs.Item>
                <Breadcrumbs.Item>Item 2</Breadcrumbs.Item>
                <Breadcrumbs.Item isLast>Item 3</Breadcrumbs.Item>
            </Breadcrumbs>
            <ThemeSwitcher />
        </div>
    )
}
