import { BrandType } from '../../../service/brands.service'

export type pageInfoType = {
    items: BrandType[]
    meta: metaType
}

export type metaType = {
    itemCount: number
    totalItemsCount: number
    itemsPerPage: number
    totalPages: number
    currentPage: number
    previous: number
    next: number
}
