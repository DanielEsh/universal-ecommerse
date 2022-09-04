import { ReactNode } from 'react'
import classNames from 'classnames'

export type TableCellProps = {
    children: ReactNode
    component?: 'th' | 'td'
    width?: string
}

export const TableCell = (props: TableCellProps) => {
    const { children, component, width } = props

    const Tag = component || 'td'

    const classes = classNames('p-2  border border-stone-900', {
        'bg-black text-white border-stone-600': component === 'th',
    })

    return (
        <Tag width={width} className={classes}>
            {children}
        </Tag>
    )
}
