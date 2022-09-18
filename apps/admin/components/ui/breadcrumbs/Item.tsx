import { ReactNode, useContext } from 'react'
import { BreadcrumbsContext } from '@/ui/breadcrumbs/Context'

type BreadcrumbsItemPropsType = {
    children: ReactNode
}

export const BreadcrumbsItem = ({ children }: BreadcrumbsItemPropsType) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { color } = useContext(BreadcrumbsContext)

    console.log('COLOR', color)

    return <li>{children}</li>
}
