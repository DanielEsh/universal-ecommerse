import { GetServerSideProps } from 'next'
import Link from 'next/link'

import {
    BrandType,
    getBrandById,
    deleteBrand,
} from '../../service/brands.service'

import { BrandEditableForm } from '@/components/brands/BrandEditableForm'
import { BrandHeader } from '@/components/brands/BrandHeader'

import { dateToString } from '../../utils/dateToString'
import { Button } from '@/components/ui/Button'

type Props = {
    data: BrandType
}

const BrandsDetailPage = ({ data }: Props) => {
    const handleDelete = () => {
        deleteBrand(data.id)
    }

    return (
        <div className="flex h-full">
            <div className="flex-1">
                <Link href="/brands">
                    <a>Ко всем брендам</a>
                </Link>

                {data && (
                    <>
                        <BrandHeader name={data.name} />
                        <BrandEditableForm brandData={data} />
                    </>
                )}
            </div>

            <aside className="w-[280px]">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between bg-slate-200 p-4 rounded-md">
                        <span>Дата создания</span>{' '}
                        <span>{dateToString(new Date(data?.created_at))}</span>
                    </div>
                    <div className="flex items-center justify-between bg-slate-200 p-4 rounded-md">
                        <span>Дата обновления</span>{' '}
                        <span>{dateToString(new Date(data?.updated_at))}</span>
                    </div>

                    <Button type="button" onClick={handleDelete}>
                        Delete brand
                    </Button>
                </div>
            </aside>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query
    const { data } = await getBrandById(id as string)
    return { props: { data } }
}

export default BrandsDetailPage
