import { FC, useState } from 'react'
import { useRouter } from 'next/router'

import { BrandType } from '../service/brands.service'
import { Button } from './ui/Button'
import { Table } from './ui/Table'
import { SheetModal } from './ui/Modal/SheetModal'
import { BrandsCreateForm } from './BrandsCreateForm'
import { BrandPaginationItem } from '@/components/brands/BrandPaginationItem'

type Props = {
    info: pageInfo
    updateData: () => void
    onPageChange: any
}

type pageInfo = {
    data: BrandType[]
    count: number
    total: number
    page: number
    pageCount: number
}

export const BrandsTable: FC<Props> = ({ info, updateData, onPageChange }) => {
    const { data, total, pageCount, page } = info

    const router = useRouter()

    const [modal, setModal] = useState(false)

    const onRowClick = (id: string) => {
        router.push(`/brands/${id}`)
    }

    const update = () => {
        setModal(false)
        updateData()
    }

    console.log('ARR', Array(pageCount).fill(''))

    const handleClick = (number) => {
        onPageChange(number)
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full my-4">
                <h2>Общее количество записей: {total}</h2>
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
            <div className="flex gap-3 mt-6">
                {Array(pageCount)
                    .fill('')
                    .map((_, index) => (
                        <BrandPaginationItem
                            key={index}
                            number={index + 1}
                            isActive={index + 1 === page}
                            onClick={() => handleClick(index + 1)}
                        />
                    ))}
            </div>

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
