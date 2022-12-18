import { ReactNode } from 'react'
import { BreadcrumbsItem } from './BreadcrumbsItem'
import type { BreadcrumbsContextType } from './BreadcrumbsContext'
import { BreadcrumbsContext } from './BreadcrumbsContext'

export type BreadcrumbsRootPropsType = {
  children: ReactNode
  separator?: ReactNode
}

const COMPONENT_NAME = 'Breadcrumbs'

const ChevronRightIcon = () => <div> {'>'} </div>

const BreadcrumbsRoot = (props: BreadcrumbsRootPropsType) => {
  const { children, separator } = props

  const context: BreadcrumbsContextType = {
    color: 'primary',
    separator: separator ?? ChevronRightIcon(),
  }

  return (
    <BreadcrumbsContext.Provider value={context}>
      <nav className="bg-grey-light rounded-md">
        <ol className="list-reset flex items-center gap-3">{children}</ol>
      </nav>
    </BreadcrumbsContext.Provider>
  )
}

export const Breadcrumbs = Object.assign(BreadcrumbsRoot, {
  Item: BreadcrumbsItem,
})

BreadcrumbsRoot.displayName = COMPONENT_NAME
