import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import { BrandType, getAllBrands } from '../../service/brands.service'

import { BrandsTable } from '../../components/BrandsTable'

type Props = {
    pageInfo: pageInfo
}

type pageInfo = {
    items: BrandType[]
    meta: metaType
}

type metaType = {
    itemCount: number
    totalItems: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
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
            BRANDS PAGE
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
    return { props: { pageInfo: data } }
}

export default BrandsPage
