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

            {
                data.map(brand => (
                    <div key={brand.id}>
                        {brand.name}
                    </div>
                ))
            }

            <BrandCreator />
            <BrandsTable data={data} />
        </div>
    )
}

export async function getServerSideProps() {
    // Fetch data from external API
    const {data} = await getAllBrands();
  
    // Pass data to the page via props
    return { props: { data } }
  }

export default BrandsPage