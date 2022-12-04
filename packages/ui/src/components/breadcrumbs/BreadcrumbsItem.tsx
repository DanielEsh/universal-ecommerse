import { ReactNode, useContext, Fragment } from 'react'
import { BreadcrumbsContext } from './BreadcrumbsContext'
import type { BreadcrumbsContextType } from './BreadcrumbsContext'

type BreadcrumbsItemPropsType = {
    children: ReactNode
    isLast?: boolean
}

export const BreadcrumbsItem = (props: BreadcrumbsItemPropsType) => {
    const { children, isLast } = props

    const { color, separator } = useContext<BreadcrumbsContextType>(BreadcrumbsContext)

    if (isLast) {
        return <li>{children}</li>
    }

    return (
        <Fragment>
            <li className="text-blue-500 hover:text-blue-700">{children}</li>

            <li aria-hidden="true">
                <span className="text-gray-800">{separator}</span>
            </li>
        </Fragment>
    )
}
