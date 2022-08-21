import { ReactNode } from 'react'
import classNames from 'classnames'

export type TableCellProps = {
    children: ReactNode
    component?: 'th' | 'td'
}

export const TableCell = (props: TableCellProps) => {
    const { children, component } = props

    const Tag = component || 'td'

    const classes = classNames('p-2  border border-stone-900', {
        'bg-blue-500': component === 'th',
    })

    return <Tag className={classes}>{children}</Tag>
}
