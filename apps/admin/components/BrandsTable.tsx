import { Table } from "./ui/Table"

export const BrandsTable = ({data}) => {
    return (
        <div>
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell component="th">
                            
                        </Table.Cell>
                        <Table.Cell component="th">
                            Имя
                        </Table.Cell>
                        <Table.Cell component="th">
                            Описание
                        </Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {
                        data.map((brand, idx) => (
                            <Table.Row key={brand.id}>
                                <Table.Cell>
                                    {idx + 1}
                                </Table.Cell>
                                <Table.Cell>
                                    {brand.name}
                                </Table.Cell>
                                <Table.Cell>
                                    {brand.description}
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
