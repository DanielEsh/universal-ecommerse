import {FC} from "react";
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandCreator } from "../../components/BrandCreator";
import { BrandsTable } from "../../components/BrandsTable";

type Props = {
    data: BrandType[],
}

const BrandsPage: FC<Props> = ({data}) => {
    return (
        <div>
            BRANDS PAGE
            <BrandsTable data={data} />
            <BrandCreator />
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await getAllBrands();
    return { props: { data } }
  }

export default BrandsPage