import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { BrandType } from '../service/brands.service'
import { Button } from './ui/Button'
import { Table } from './ui/Table'
import { SheetModal } from './ui/Modal/SheetModal'
import { BrandsCreateForm } from './BrandsCreateForm'

type Props = {
    data: BrandType[]
    updateData: () => void
}

export const BrandsTable: FC<Props> = ({ data, updateData }) => {
    const router = useRouter()

    const [modal, setModal] = useState(false)

    const onRowClick = (id: string) => {
        router.push(`/brands/${id}`)
    }

    const update = () => {
        setModal(false)
        updateData()
    }

    return (
        <div>
            <div className="flex items-center justify-end w-full my-4">
                <div className="w-[160px]">
                    <Button
                        type="button"
                        onClick={() => {
                            setModal(true)
                        }}
                    >
                        Добавить
                    </Button>
                </div>
            </div>
            <Table>
                <Table.Head>
                    <Table.Row>
                        <Table.Cell component="th"> </Table.Cell>
                        <Table.Cell component="th">Имя</Table.Cell>
                        <Table.Cell component="th">Описание</Table.Cell>
                    </Table.Row>
                </Table.Head>
                <Table.Body>
                    {data.map((brand, idx) => (
                        <Table.Row
                            key={brand.id}
                            onClick={() => onRowClick(brand.id)}
                        >
                            <Table.Cell>{idx + 1}</Table.Cell>
                            <Table.Cell>{brand.name}</Table.Cell>
                            <Table.Cell>{brand.description}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>

            <SheetModal
                isOpen={modal}
                onExit={() => {
                    setModal(false)
                }}
            >
                <BrandsCreateForm onSuccess={update} />
            </SheetModal>
        </div>
    )
}
