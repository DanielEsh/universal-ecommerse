import { Brand } from '@/src/entities/brands'
import { Table } from '@/src/shared/ui/Table'

interface Props {
  brands: Brand[]
}

export const BrandsTable = ({ brands }: Props) => {
  return (
    <Table>
      <Table.Head>
        <Table.Cell width="10%" component="th">
          Number
        </Table.Cell>
        <Table.Cell width="15%" component="th">
          Slug
        </Table.Cell>
        <Table.Cell width="15%" component="th">
          Name
        </Table.Cell>
        <Table.Cell width="20%" component="th">
          Count
        </Table.Cell>
        <Table.Cell width="20%" component="th">
          Actions
        </Table.Cell>
      </Table.Head>

      <Table.Body>
        {brands.map(({ id, slug, name, goodsCount }, index) => (
          <Table.Row key={id}>
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{slug}</Table.Cell>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{goodsCount}</Table.Cell>
            <Table.Cell>{goodsCount}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}
