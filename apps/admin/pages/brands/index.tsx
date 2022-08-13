import { getAllBrands } from "../../service/brands.service"

import { BrandCreator } from "../../components/BrandCreator";
import { Table } from "../../components/ui/Table/Table";
// import { Table } from "../../components/ui/Table";

const BrandsPage = ({data}) => {
    return (
        <div>
            BRANDS PAGE

            {
                data.map(brand => (
                    <div key={brand.id}>
                        {brand.name}
                    </div>
                ))
            }

            <BrandCreator />
            <Table>
                <Table.Caption>
                    CAPTION
                </Table.Caption>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell component="th">
                            Имя
                        </Table.Cell>
                        <Table.Cell component="th">
                            Описание
                        </Table.Cell>
                        <Table.Cell component="th">
                            Кол-во товара
                        </Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            Имя 1
                        </Table.Cell>
                        <Table.Cell>
                            Описание 1
                        </Table.Cell>
                        <Table.Cell>
                            Кол-во товара 1
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            Имя 2
                        </Table.Cell>
                        <Table.Cell>
                            Описание 2
                        </Table.Cell>
                        <Table.Cell>
                            Кол-во товара 2
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            Имя 3
                        </Table.Cell>
                        <Table.Cell>
                            Описание 3
                        </Table.Cell>
                        <Table.Cell>
                            Кол-во товара 3
                        </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            Имя 4
                        </Table.Cell>
                        <Table.Cell>
                            Описание 4
                        </Table.Cell>
                        <Table.Cell>
                            Кол-во товара 4
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
                
            </Table>
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const {data} = await getAllBrands();
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default BrandsPage