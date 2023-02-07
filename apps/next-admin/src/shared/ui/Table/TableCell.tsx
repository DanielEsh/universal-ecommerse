import { ReactNode, useContext } from 'react'
import classNames from 'clsx'
import { TableContext } from '@/src/shared/ui/Table/TableContext'

export type TableCellProps = {
  children: ReactNode
}

export const TableCell = (props: TableCellProps) => {
  const { children } = props

  const { color } = useContext(TableContext)

  const colorsList: any = {
    primary: 'p-2 border',
  }

  const classes = classNames(colorsList[color])

  return <td className={classes}>{children}</td>
}
