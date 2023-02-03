import { ReactNode, useContext } from 'react'
import classNames from 'clsx'
import { TableContext } from '@/src/shared/ui/Table/TableContext'

export type TableCellProps = {
  children: ReactNode
  component?: 'th' | 'td'
  width?: string
}

export const TableCell = (props: TableCellProps) => {
  const { children, component, width } = props

  const Tag = component || 'td'

  const { color } = useContext(TableContext)

  const colorsList: any = {
    primary: 'p-2 border',
  }

  const classes = classNames(colorsList[color], {
    '': component === 'th',
  })

  return (
    <Tag width={width} className={classes}>
      {children}
    </Tag>
  )
}
