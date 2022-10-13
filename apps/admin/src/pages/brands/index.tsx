import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { getAllBrands } from '../../../service/brands.service'
import type { pageInfoType } from '@/src/shared/ui/Pagination/types'

import { BrandsTable } from '@/components/BrandsTable'

type Props = {
    pageInfo: pageInfoType
}

const BrandsPage = ({ pageInfo }: Props) => {
    const router = useRouter()

    const refreshData = () => {
        router.replace(router.asPath)
    }

    const handlePageChange = (page: any) => {
        router.query.page = page
        router.push(router)
    }

    return (
        <div>
            <h1 className="text-3xl">Бренды</h1>

            <BrandsTable
                info={pageInfo}
                updateData={refreshData}
                onPageChange={handlePageChange}
            />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { page, search } = context.query
    const { data } = await getAllBrands({
        page: page as string,
        search: search as string,
    })

    if (!data.items.length) {
        return {
            notFound: true,
        }
    }

    return { props: { pageInfo: data } }
}

export default BrandsPage
