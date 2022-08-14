import {FC, useState} from "react";
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandCreator } from "../../components/BrandCreator";
import { BrandsTable } from "../../components/BrandsTable";
import { SheetModal } from '../../components/ui/Modal/SheetModal';

type Props = {
    data: BrandType[],
}

const BrandsPage: FC<Props> = ({data}) => {
    const [modal, setModal] = useState(false)


    return (
        <div>
            BRANDS PAGE
            <BrandsTable data={data} />
            <BrandCreator />

            <button onClick={() => {setModal(!modal)}}>
                Open modal
            </button>


            <SheetModal 
                isOpen={modal}
                onExit={() => {setModal(!modal)}}
            >
                MODAL
            </SheetModal>
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await getAllBrands();
    return { props: { data } }
  }

export default BrandsPage