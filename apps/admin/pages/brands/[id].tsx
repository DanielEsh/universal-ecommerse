import { GetServerSideProps } from 'next'

import { BrandType, getBrandById } from "../../service/brands.service"

type Props = {
    data: BrandType,
}

const BrandsDetailPage = ({data}: Props) => {

    return (
        <div>
            {data.name}
        </div>
    )
}


  export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    const {data} = await getBrandById(id as string);
    return { props: { data } }
  }

export default BrandsDetailPage