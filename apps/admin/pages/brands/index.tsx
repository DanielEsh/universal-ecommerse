import {useState} from "react";
import { useRouter } from 'next/router';
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandsTable } from "../../components/BrandsTable";
import { SheetModal } from '../../components/ui/Modal/SheetModal';

type Props = {
    data: BrandType[],
}

const BrandsPage = ({data} : Props) => {
    const router = useRouter();

    const [modal, setModal] = useState<boolean>(true)

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

            <SheetModal 
                isOpen={!!router.query.brandId}
                onExit={() => router.push("/brands")}
            >
               BRANDS DETAIL PAGE
            </SheetModal>
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await getAllBrands();
    return { props: { data } }
  }

export default BrandsPage