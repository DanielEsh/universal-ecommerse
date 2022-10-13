import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { Dialog } from '@/src/shared/ui/Modal/Dialog'
import { useState } from 'react'

import {
    BrandType,
    getBrandById,
    deleteBrand,
} from '../../../service/brands.service'

import { BrandEditableForm } from '@/components/brands/BrandEditableForm'
import { TimestampPresenter } from '@/components/TimestampPresenter'
import { Button } from '@/src/shared/ui/Button'

type Props = {
    data: BrandType
}

const BrandsDetailPage = ({ data }: Props) => {
    const [open, setOpen] = useState<boolean>(false)

    const handleDelete = () => {
        setOpen(true)
        // deleteBrand(data.id)
    }

    return (
        <div>
            <Link href="/brands">
                <a>Ко всем брендам</a>
            </Link>

            <div className="flex items-center justify-between my-6">
                <h1 className="text-2xl">Информация о бренде</h1>
            </div>

            <div className="flex h-full">
                <div className="flex-1">
                    <BrandEditableForm brandData={data} />
                </div>

                <aside className="w-[280px]">
                    <div className="flex flex-col gap-4">
                        <TimestampPresenter
                            label="Дата создания"
                            date={new Date(data.created_at)}
                        />

                        <TimestampPresenter
                            label="Дата обновления"
                            date={new Date(data.updated_at)}
                        />

                        <Button type="button" onClick={handleDelete}>
                            Save brand
                        </Button>

                        <Button type="button" onClick={handleDelete}>
                            Delete brand
                        </Button>
                    </div>
                </aside>

                <Dialog isOpen={open} onExit={() => setOpen(false)}>
                    Dialog
                </Dialog>
            </div>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const { data } = await getBrandById(id as string)
    return { props: { data } }
}

export default BrandsDetailPage
