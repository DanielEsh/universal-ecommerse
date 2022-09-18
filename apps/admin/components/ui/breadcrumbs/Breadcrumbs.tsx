import { ReactNode } from 'react'
import { BreadcrumbsItem } from '@/ui/breadcrumbs/Item'
import { BreadcrumbsContext } from '@/ui/breadcrumbs/Context'

export type BreadcrumbsRootPropsType = {
    children: ReactNode
}

const COMPONENT_NAME = 'Breadcrumbs'

const BreadcrumbsRoot = (props: BreadcrumbsRootPropsType) => {
    const { children } = props

    const context = {
        color: 'primary',
    }

    return (
        <BreadcrumbsContext.Provider value={context}>
            <nav>
                <ol>{children}</ol>
            </nav>
        </BreadcrumbsContext.Provider>
    )
}

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
    Item: BreadcrumbsItem,
})

BreadcrumbsRoot.displayName = COMPONENT_NAME

/**
 * TEMPLATE
 * <Breadcrumbs
 *  color={color}
 *  separator=ReactComponent
 *  >
 *   <Breadcrumbs.Item>
 *     title
 *   </Breadcrumbs.Item>
 *   <Breadcrumbs.Item>
 *     title 2
 *   </Breadcrumbs.Item>
 *   <Breadcrumbs.Item>
 *     title 3
 *   </Breadcrumbs.Item>
 * </Breadcrumbs>
 */
