import React from 'react'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableRow } from './TableRow'
import { TableCell } from './TableCell'

const NAME = 'Table'

export const TableRoot = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}

export const Table = Object.assign(TableRoot, {
    Head: TableHead,
    Body: TableBody,
    Row: TableRow,
    Cell: TableCell,
  })

TableRoot.displayName = NAME
