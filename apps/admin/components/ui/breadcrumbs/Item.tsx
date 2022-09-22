import { ReactNode, useContext, Fragment } from 'react'
import { BreadcrumbsContext } from '@/ui/breadcrumbs/Context'
import type { BreadcrumbsContextType } from '@/ui/breadcrumbs/Context'

type BreadcrumbsItemPropsType = {
    children: ReactNode
    id?: number
    link?: string
    isLast?: boolean
}

export const BreadcrumbsItem = (props: BreadcrumbsItemPropsType) => {
    const { children, link, isLast, id } = props

    const { color, separator } = useContext<BreadcrumbsContextType>(BreadcrumbsContext)

    if (isLast) {
        return (
            <li key={id}>
                <a href={link}>{children}</a>
            </li>
        )
    }

    return (
        <Fragment key={id}>
            <li>
                <a href={link} className="text-blue-500 hover:text-blue-700">
                    {children}
                </a>
            </li>

            <li aria-hidden="true">
                <div className="text-gray-800">{separator}</div>
            </li>
        </Fragment>
    )
}
