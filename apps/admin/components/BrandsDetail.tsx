import {useEffect, useState} from 'react'
import { useRouter } from 'next/router'

import { getBrandById } from '../service/brands.service'

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
        </div>
    )
}
