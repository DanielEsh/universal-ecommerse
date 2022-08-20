import {useState} from "react";
import { useRouter } from 'next/router';
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandsTable } from "../../components/BrandsTable";
import { AsideModal } from '../../components/ui/Modal/AsideModal';

type Props = {
    data: BrandType[],
}

const BrandsPage = ({data} : Props) => {
    const router = useRouter();

    const [aside, setAside] = useState(false)

    const refreshData = () => {
        router.replace(router.asPath);
    }

    return (
        <div>
            BRANDS PAGE
            <BrandsTable 
                data={data}
                updateData={refreshData}
            />

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