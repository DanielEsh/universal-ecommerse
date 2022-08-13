import { ReactNode } from 'react'
import classNames from 'classnames'

import { 
    TableContext, 
    TableCaption,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
} from '../Table/'

const NAME = 'Table'

export type TableRootProps = {
    children: ReactNode
    className?: string
}


export const TableRoot = (props: TableRootProps) => {
    const {
        children,
        className,
    } = props

    const context = {
        color: 'primary',
    }

    const classes = classNames('w-full', className)

    return (
        <TableContext.Provider
            value={context}
        >
            <table className={classes}>
                {children}
            </table>
        </TableContext.Provider>
    )
}

export const Table = Object.assign(TableRoot, {
    Caption: TableCaption,
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
  })

TableRoot.displayName = NAME
