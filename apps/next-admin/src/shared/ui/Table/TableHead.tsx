import { useContext } from 'react'
import { TableCellHead } from '@/src/shared/ui/Table/TableCellHead'
import { TableContext } from '@/src/shared/ui/Table/TableContext'

export const TableHead = () => {
  const context = useContext(TableContext)
  const { headerGroups } = context

  return (
    <thead>
      {headerGroups &&
        headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableCellHead key={header.id} header={header} />
            ))}
          </tr>
        ))}
    </thead>
  )
}
