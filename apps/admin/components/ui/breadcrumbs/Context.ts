import { createContext, ReactNode } from 'react'

export type BreadcrumbsContextType = {
    color: string
    separator?: ReactNode
}

const COMPONENT_NAME = 'BreadcrumbsContext'

export const BreadcrumbsContext = createContext<BreadcrumbsContextType>({
    color: 'primary',
})

BreadcrumbsContext.displayName = COMPONENT_NAME
