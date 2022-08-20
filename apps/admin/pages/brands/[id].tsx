import { useState } from 'react';
import { useRouter } from 'next/router'

import { SheetModal } from '../../components/ui/Modal/SheetModal';

const BrandsDetailPage = () => {
    const router = useRouter()

    const [modal, setModal] = useState<boolean>(true)

    const onExit = () => {
        setModal(false)

        // console.log(router.query)
        // setTimeout(() => {
        //     router.push('/brands/')
        // }, 300)
    }

    return (
        <>
            123
        </>
    )
}


export default BrandsDetailPage