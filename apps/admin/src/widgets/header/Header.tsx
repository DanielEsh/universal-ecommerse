import { HeaderBreadcrumbs } from '@/src/widgets/header/HeaderBreadcrumbs'
import { HeaderUser } from '@/src/widgets/header/HeaderUser'

export const Header = () => {
    return (
        <div className="sticky flex justify-between items-center top-0 bg-gray-100 w-full h-[80px] p-4 dark:bg-neutral-900 dark:text-white">
            <HeaderBreadcrumbs />
            <HeaderUser />
        </div>
    )
}
