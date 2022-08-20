import {FC, useState} from "react";
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandCreator } from "../../components/BrandCreator";
import { BrandsTable } from "../../components/BrandsTable";
import { AsideModal } from '../../components/ui/Modal/AsideModal';

type Props = {
    data: BrandType[],
}

const BrandsPage: FC<Props> = ({data}) => {
    const [aside, setAside] = useState(false)


    return (
        <div>
            BRANDS PAGE
            <BrandsTable data={data} />
            <BrandCreator />

            <button onClick={() => {setAside(!aside)}}>
                Open Aside
            </button>

            <AsideModal
                isOpen={aside}
                onExit={() => {setAside(!aside)}}
            >
                AsideModal
            </AsideModal>
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await getAllBrands();
    return { props: { data } }
  }

export default BrandsPage