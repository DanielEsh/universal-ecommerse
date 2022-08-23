import { useRouter } from 'next/router'
import { BrandType, getAllBrands } from '../../service/brands.service'

import { BrandsTable } from '../../components/BrandsTable'

type Props = {
    data: BrandType[]
}

const BrandsPage = ({ data }: Props) => {
    const router = useRouter()

    const refreshData = () => {
        router.replace(router.asPath)
    }

    return (
        <div>
            BRANDS PAGE
            <BrandsTable data={data} updateData={refreshData} />
        </div>
    )
}

export async function getServerSideProps() {
    const { data } = await getAllBrands()
    return { props: { data } }
}

export default BrandsPage
