import { ReactNode } from 'react'

export type TableCellProps = {
    children: ReactNode
    component?: 'th' | 'td'
}

export const TableCell = (props: TableCellProps) => {
    const {
        children,
        component,
    } = props

    const Tag = component || 'td'

    return (
        <Tag>
            {children}
        </Tag>
    )
}
