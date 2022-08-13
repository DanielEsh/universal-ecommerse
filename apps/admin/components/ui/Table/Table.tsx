import { ReactNode } from 'react'
import classNames from 'classnames'

import { TableContext } from './TableContext'
import { TableCaption } from './TableCaption'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'

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
