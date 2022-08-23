import { useState, FormEvent } from 'react'
import { GetServerSideProps } from 'next'

import {
    BrandType,
    getBrandById,
    deleteBrand,
    updateBrand,
} from '../../service/brands.service'

import { dateToString } from '../../utils/dateToString'
import { BaseInput } from '@/ui/inputs/BaseInput'
import { Button } from '@/ui/Button'

type Props = {
    data: BrandType
}

type formValuesType = {
    name?: string
    description?: string
}

const BrandsDetailPage = ({ data }: Props) => {
    const initialValues = {
        name: '',
        description: '',
    }

    const [values, setValues] = useState<formValuesType>(initialValues)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // @ts-ignore
        updateBrand({
            id: data.id,
            ...values,
        })
    }

    const handleDelete = () => {
        deleteBrand(data.id)
    }

    return (
        <div className="flex h-full">
            <div className="flex-1">
                {data && (
                    <>
                        <form
                            className="flex flex-col h-full"
                            onSubmit={handleSubmit}
                        >
                            <div className="w-[380px]">
                                <BaseInput
                                    label="Name"
                                    defaultValue={data.name}
                                    onChange={(value) =>
                                        setValues({
                                            name: value,
                                        })
                                    }
                                />
                            </div>

                            <div className="w-[380px]">
                                <BaseInput
                                    label="Description"
                                    defaultValue={data.description}
                                    onChange={(value) =>
                                        setValues({
                                            description: value,
                                        })
                                    }
                                />
                            </div>

                            <div className="w-[380px] mt-5">
                                <Button type="submit">Update</Button>
                            </div>
                        </form>
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
