import { ReactNode, useContext } from 'react'
import classNames from 'clsx'
import {
  TableContext,
  TableContextType,
} from '@/src/shared/ui/Table/TableContext'

export type TableRowProps = {
  children: ReactNode
  onClick?: () => void
}

export const TableRow = ({ children, onClick }: TableRowProps) => {
  const { color } = useContext<TableContextType>(TableContext)

  const colorsList: any = {
    primary: ' cursor-pointer',
  }

  const classes = classNames(colorsList[color])

  return (
    <tr className={classes} onClick={onClick}>
      {children}
    </tr>
  )
}
