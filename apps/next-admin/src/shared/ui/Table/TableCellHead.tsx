import { ReactNode, useContext } from 'react'
import classNames from 'clsx'
import { TableContext } from '@/src/shared/ui/Table/TableContext'

export type TableCellProps = {
  children: ReactNode
  resizable?: boolean
  onResizerClick?: (e: any) => void
  onResizeStart?: (e: any) => void
}

export const TableCellHead = (props: TableCellProps) => {
  const { children, resizable, onResizerClick, onResizeStart } = props

  const { color } = useContext(TableContext)

  const colorsList: any = {
    primary: 'p-2 border',
  }

  const classes = classNames(colorsList[color], {
    relative: resizable,
  })

  const handleResizerClick = (event: any) => {
    if (onResizerClick) {
      onResizerClick({
        originalEvent: event,
      })
    }
  }

  const handleMouseDown = (event: any) => {
    if (onResizeStart)
      onResizeStart({
        originalEvent: event,
      })
  }

  return (
    <th className={classes}>
      {resizable && (
        <span
          className="absolute top-0 right-0 h-full w-2 cursor-col-resize bg-red-500"
          onMouseDown={handleMouseDown}
          onClick={handleResizerClick}
        />
      )}
      {children}
    </th>
  )
}
