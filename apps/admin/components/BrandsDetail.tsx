import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import { getBrandById } from '../service/brands.service'
import { dateToString } from '../utils/dateToString'

import { BaseInput } from './ui/inputs/BaseInput'

export const BrandsDetail = () => {
    const router = useRouter()
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const res = await getBrandById(router.query.brandId as string)
            setData(res.data)
        }

        fetchData().catch(console.error);

        console.log('DATA', data);
    }, [])

    return (
        <div>
            DETAIL
            {
                data && (
                    <>
                        <form>
                            <div className="w-[380px]">
                                <BaseInput 
                                    label="Name"
                                    defaultValue={data.name}
                                />
                            </div>

                            <div className="w-[380px]">
                                <BaseInput 
                                    label="Description"
                                    defaultValue={data.description}
                                />
                            </div>
                        </form>


                        <div>
                            {dateToString(new Date(data.created_at))}
                        </div>
                        <div>
                            {dateToString(new Date(data.updated_at))}
                        </div>
                    </>
                )
            }
        </div>
    )
}
