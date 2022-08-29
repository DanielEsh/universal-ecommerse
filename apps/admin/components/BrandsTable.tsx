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
    items: BrandType[]
    meta: metaType
    links: Links
}

type metaType = {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
}

type Links = {
    first: string
    previous: string
    next: string
    last: string
}

export const BrandsTable: FC<Props> = ({ info, updateData, onPageChange }) => {
    const { items } = info

    const router = useRouter()

    const [modal, setModal] = useState(false)

    const onRowClick = (id: string) => {
        router.push(`/brands/${id}`)
    }

    const update = () => {
        setModal(false)
        updateData()
    }

    const handleClick = (number: number) => {
        onPageChange(number)
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full my-4">
                <h2>Общее количество записей: 10</h2>
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
            <div className="min-h-[536px]">
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Cell width="10%" component="th">
                                ID
                            </Table.Cell>
                            <Table.Cell width="30%" component="th">
                                Имя
                            </Table.Cell>
                            <Table.Cell width="60%" component="th">
                                Описание
                            </Table.Cell>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        {items.map(({ id, name, description }) => (
                            <Table.Row key={id} onClick={() => onRowClick(id)}>
                                <Table.Cell>{id}</Table.Cell>
                                <Table.Cell>{name}</Table.Cell>
                                <Table.Cell>{description}</Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
            <div className="flex gap-3 mt-6">
                {Array(10)
                    .fill('')
                    .map((_, index) => (
                        <BrandPaginationItem
                            key={index}
                            number={index + 1}
                            isActive={index + 1 === 1}
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
