import {FC} from "react";
import { BrandType, getAllBrands } from "../../service/brands.service"

import { BrandCreator } from "../../components/BrandCreator";
import { BrandsTable } from "../../components/BrandsTable";
import { Modal } from '../../components/ui/Modal/Modal';

type Props = {
    data: BrandType[],
}

const BrandsPage: FC<Props> = ({data}) => {
    return (
        <div>
            BRANDS PAGE
            <BrandsTable data={data} />
            <BrandCreator />

            <Modal>
                MODAL
            </Modal>
        </div>
    )
}

export async function getServerSideProps() {
    const {data} = await getAllBrands();
    return { props: { data } }
  }

export default BrandsPage