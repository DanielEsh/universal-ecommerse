import { Brand } from '@/src/entities/brands'
import { Table } from '@/src/shared/ui/Table'
import { BrandsTableActions } from '@/src/entities/brands/ui/BrandsTableActions'
import { BrandsTableHeader } from '@/src/entities/brands/ui/BrandsTableHeader'

interface Props {
  brands: Brand[]
}

export const BrandsTable = ({ brands }: Props) => {
  return (
    <Table>
      <Table.Caption>
        <BrandsTableHeader />
      </Table.Caption>
      <Table.Head>
        <Table.CellHead>Number</Table.CellHead>
        <Table.CellHead>Slug</Table.CellHead>
        <Table.CellHead>Name</Table.CellHead>
        <Table.CellHead>Count</Table.CellHead>
        <Table.CellHead>Actions</Table.CellHead>
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
