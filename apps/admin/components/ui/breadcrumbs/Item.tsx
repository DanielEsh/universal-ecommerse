import { ReactNode, useContext, Fragment } from 'react'
import { BreadcrumbsContext } from '@/ui/breadcrumbs/Context'
import ChevronRightIcon from 'public/icons/chevron-right.svg'

type BreadcrumbsItemPropsType = {
    children: ReactNode
    id?: number
    link?: string
    isLast?: boolean
}

export const BreadcrumbsItem = (props: BreadcrumbsItemPropsType) => {
    const { children, link, isLast, id } = props

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { color } = useContext(BreadcrumbsContext)

    console.log('COLOR', color)
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
                <div className="text-gray-800">
                    <ChevronRightIcon />
                </div>
            </li>
        </Fragment>
    )
}
