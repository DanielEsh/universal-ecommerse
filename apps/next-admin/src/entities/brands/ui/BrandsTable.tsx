import { useEffect } from 'react'

import { Brand } from '@/src/entities/brands'
import { Table } from '@/src/shared/ui/Table'
import { BrandsTableActions } from '@/src/entities/brands/ui/BrandsTableActions'
import { BrandsTableHeader } from '@/src/entities/brands/ui/BrandsTableHeader'

interface Props {
  brands: Brand[]
}

export const BrandsTable = ({ brands }: Props) => {
  const move = () => {
    console.log('MOVE')
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

  const handleResizeStart = (event: any) => {
    console.log('start', event)
    bindMove()
    bindUp()
  }

  function handleResizeEnd() {
    console.log('resize end')
    unbindMove()
    unbindUp()
  }

  return (
    <Table>
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
  )
}
