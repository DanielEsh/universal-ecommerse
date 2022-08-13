import { ReactNode } from 'react'
import { TableContext } from './TableContext'
import { TableCaption } from './TableCaption'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'

const NAME = 'Table'

export type TableRootProps = {
    children: ReactNode
}


export const TableRoot = ({children}: TableRootProps) => {
    const context = {
        color: 'primary',
    }

    return (
        <TableContext.Provider
            value={context}
        >
            <table>
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
