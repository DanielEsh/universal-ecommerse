import { useRef } from 'react'

import { Brand } from '@/src/entities/brands'
import { Table } from '@/src/shared/ui/Table'
import { BrandsTableActions } from '@/src/entities/brands/ui/BrandsTableActions'
import { BrandsTableHeader } from '@/src/entities/brands/ui/BrandsTableHeader'

interface Props {
  brands: Brand[]
}

function getOffset(el?: HTMLElement | null) {
  if (el) {
    const rect = el.getBoundingClientRect()

    return {
      top:
        rect.top +
        (window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0),
      left:
        rect.left +
        (window.pageXOffset ||
          document.documentElement.scrollLeft ||
          document.body.scrollLeft ||
          0),
    }
  }

  return {
    top: 'auto',
    left: 'auto',
  }
}

export const BrandsTable = ({ brands }: Props) => {
  const resizerHelperRef = useRef(null)
  const rootRef = useRef(null)
  const resizeX = useRef(0)
  const lastResizeHelperX = useRef(0)
  const resizeColumn = useRef(null)
  const resizeColumnElement = useRef(null)

  const move = () => {
    console.log('MOVE')
    handleResize()
  }

  const up = () => {
    console.log('UP')
    handleResizeEnd()
  }

  const bindMove = () => {
    document.addEventListener('mousemove', move)
  }

  const bindUp = () => {
    document.addEventListener('mouseup', up)
  }

  const unbindMove = () => {
    document.removeEventListener('mousemove', move)
  }

  const unbindUp = () => {
    document.removeEventListener('mouseup', up)
  }

  const handleResizerClick = (event: any) => {
    console.log('click', event)
  }

  function handleResize() {
    // onColumnResize
    console.log('handle resize')

    const containerLeft = getOffset(rootRef.current).left

    // TODO: установить текущий ячейки не выделяемый текст

    resizerHelperRef.current.style.height = rootRef.current.offsetHeight + 'px'
    resizerHelperRef.current.style.top = 0 + 'px'
    resizerHelperRef.current.style.left =
      event.pageX - containerLeft + rootRef.current.scrollLeft + 'px'

    resizerHelperRef.current.style.display = 'block'
  }

  const handleResizeStart = (event: any) => {
    // onColumnResizeStart
    console.log('start', event.originalEvent, event.column)

    const containerLeft = getOffset(rootRef.current).left
    resizeX.current =
      event.originalEvent.pageX - containerLeft + rootRef.current.scrollLeft

    console.log('containerLeft', containerLeft)
    console.log('resizeX.curren', resizeX.current)
    resizeColumn.current = event.column
    resizeColumnElement.current =
      event.originalEvent.currentTarget.parentElement
    lastResizeHelperX.current =
      event.originalEvent.pageX - containerLeft + rootRef.current.scrollLeft
    console.log('resizeColumn', resizeColumn.current)
    console.log('resizeColumnElement', resizeColumnElement.current)
    bindMove()
    bindUp()
  }

  const updateTableWidth = (el, newWidth) => {
    !!el && (el.style.width = newWidth)
  }

  function handleResizeEnd() {
    // onColumnResizeEnd
    console.log('resize end')

    const delta =
      resizerHelperRef.current.offsetLeft - lastResizeHelperX.current
    const columnWidth = resizeColumnElement.current.offsetWidth
    const newColumnWidth = columnWidth + delta
    const minWidth = resizeColumnElement.current.style.minWidth || 15

    console.log('newWidth', newColumnWidth)
    console.log('minWidth', minWidth)
    const tableWidth = resizeColumnElement.current.offsetWidth + delta + 'px'

    resizeColumnElement.current.style.width = tableWidth

    // TODO: установить выделяемый текст для ячейки

    resizerHelperRef.current.style.display = 'none'

    unbindMove()
    unbindUp()
  }

  return (
    <div ref={rootRef}>
      <Table className="relative">
        <div
          ref={resizerHelperRef}
          className="absolute z-10 hidden w-[1px] bg-red-500"
        />
        <Table.Caption>
          <BrandsTableHeader />
        </Table.Caption>
        <Table.Head>
          <Table.CellHead
            resizable
            onResizerClick={handleResizerClick}
            onResizeStart={handleResizeStart}>
            Number
          </Table.CellHead>
          <Table.CellHead resizable>Slug</Table.CellHead>
          <Table.CellHead resizable>Name</Table.CellHead>
          <Table.CellHead resizable>Count</Table.CellHead>
          <Table.CellHead resizable>Actions</Table.CellHead>
        </Table.Head>

        <Table.Body>
          {brands.map(({ id, slug, name, goodsCount }, index) => (
            <Table.Row key={id}>
              <Table.Cell>{index + 1}</Table.Cell>
              <Table.Cell>{slug}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{goodsCount}</Table.Cell>
              <Table.Cell>
                <BrandsTableActions slug={slug} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
