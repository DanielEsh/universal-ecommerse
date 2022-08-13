import { ReactNode } from 'react'
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
    return (
        <table>
            {children}
        </table>
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
