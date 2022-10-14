import { useState } from 'react'
import { useRouter } from 'next/router'

import { BrandType } from '../../../shared/api/brands.service'
import { Button } from '../../../shared/ui/Button'
import { Table } from '../../../shared/ui/Table'
import { SheetModal } from '../../../shared/ui/Modal/SheetModal'
import { BrandsCreateForm } from '@/src/entities/brands/components/BrandsCreateForm'
import { Pagination } from '@/src/shared/ui/Pagination/Pagination'
import { BaseInput } from '@/src/shared/ui/inputs/BaseInput'

type Props = {
    info: pageInfo
    updateData: () => void
    onPageChange: any
}

type pageInfo = {
    items: BrandType[]
    meta: metaType
}

type metaType = {
    itemCount: number
    totalItemsCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}

export const BrandsTable = ({ info, updateData, onPageChange }: Props) => {
    const { items, meta } = info
    const { totalItemsCount } = meta

    const router = useRouter()

    const [modal, setModal] = useState(false)

    const onRowClick = (id: string) => {
        router.push(`/brands/${id}`)
    }

    const update = () => {
        setModal(false)
        updateData()
    }

    const handleSearch = (value: string) => {
        router.query.search = value
        router.push(router)
    }

    return (
        <div>
            <div className="flex items-center justify-between w-full my-4">
                <h2>Общее количество записей: {totalItemsCount}</h2>
                <div className="flex gap-6">
                    <BaseInput
                        className="basis-[460px]"
                        label="Поиск"
                        defaultValue={router.query.search as string}
                        onChange={handleSearch}
                    />

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

            <Pagination meta={meta} onPageChange={onPageChange} />

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
