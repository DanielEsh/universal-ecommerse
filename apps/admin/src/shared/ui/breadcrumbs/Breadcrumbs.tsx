import { ReactNode } from 'react'
import { BreadcrumbsItem } from '@/src/shared/ui/breadcrumbs/Item'
import type { BreadcrumbsContextType } from '@/src/shared/ui/breadcrumbs/Context'
import { BreadcrumbsContext } from '@/src/shared/ui/breadcrumbs/Context'
import ChevronRightIcon from 'public/icons/chevron-right.svg'

export type BreadcrumbsRootPropsType = {
    children: ReactNode
    separator?: ReactNode
}

const COMPONENT_NAME = 'Breadcrumbs'

const BreadcrumbsRoot = (props: BreadcrumbsRootPropsType) => {
    const { children, separator } = props

    const context: BreadcrumbsContextType = {
        color: 'primary',
        separator: separator ?? ChevronRightIcon(),
    }

    return (
        <BreadcrumbsContext.Provider value={context}>
            <nav className="bg-grey-light rounded-md w-full">
                <ol className="list-reset flex items-center gap-3">{children}</ol>
            </nav>
        </BreadcrumbsContext.Provider>
    )
}

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
    Item: BreadcrumbsItem,
})

BreadcrumbsRoot.displayName = COMPONENT_NAME
