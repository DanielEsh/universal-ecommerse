import { useState } from 'react'
import {
  getCoreRowModel,
  ColumnDef,
  useReactTable,
} from '@tanstack/react-table'

import { TableHead } from '@/src/shared/ui/Table/TableHead'
import { TableBody } from '@/src/shared/ui/Table/TableBody'
import {
  TableContext,
  TableContextType,
} from '@/src/shared/ui/Table/TableContext'

// import 'shared/ui/Table/table.css'
import { TableVisibilityChanger } from '@/src/shared/ui/Table/TableVisibilityChanger'

type BaseData = unknown | object

interface TableProps<TData> {
  localStorageKey: string
  defaultData: TData[]
  columns: ColumnDef<TData>[]
}

export const Table = <TData extends BaseData>(props: TableProps<TData>) => {
  const { localStorageKey, defaultData, columns } = props

  const [data, setData] = useState(() => [...defaultData])

  const emptyValues = {
    columnVisibility: {},
    columnSizing: {},
  }

  const key = localStorage.getItem(localStorageKey)
  const getter = key ? JSON.parse(key || '') : emptyValues

  const {
    columnVisibility: defaultColumnVisibility = {},
    columnSizing: defaultColumnSizing = {},
  } = getter

  const [columnVisibility, setColumnVisibility] = useState(
    defaultColumnVisibility,
  )
  const [columnSizing, setColumnSizing] = useState(defaultColumnSizing)

  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      columnSizing,
    },
    onColumnVisibilityChange: setColumnVisibility,
    onColumnSizingChange: setColumnSizing,
    columnResizeMode: 'onChange',
    getCoreRowModel: getCoreRowModel(),
  })

  const headerGroups = table.getHeaderGroups()

  const { rows } = table.getRowModel()
  const cols = table.getAllLeafColumns()

  const lsValue = {
    columnVisibility,
    columnSizing,
  }

  localStorage.setItem(localStorageKey, JSON.stringify(lsValue))

  const context: TableContextType<TData> = {
    tableInstance: table,
    headerGroups: headerGroups,
    rows: rows,
    columns: cols,
  }

  /**
   * TODO:
   * types
   * sync with lc +
   * Header +
   * Table settings (columns visible) +
   * remove styles +
   * fix wqrning +
   *
   * create column type with required id, size, minsize, max size
   */

  return (
    <TableContext.Provider value={context}>
      <div className="p-2">
        <TableVisibilityChanger<TData> />
        <div className="flex justify-between">
          <div>Persons</div>

          <div className="flex gap-3">
            <button onClick={() => setColumnSizing({})}>reset Size</button>
          </div>
        </div>
        <table
          {...{
            style: {
              width: table.getCenterTotalSize(),
            },
          }}>
          <TableHead />
          <TableBody />
        </table>
      </div>
    </TableContext.Provider>
  )
}
