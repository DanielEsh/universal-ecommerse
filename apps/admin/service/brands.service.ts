import { $axios } from '../config/axios'
import { api } from './api'

export type BrandType = {
    id: string
    name: string
    description: string
    created_at: string
    updated_at: string
}

type CreateBrandDto = {
    name: string
    description: string
}

export const getAllBrands = (page: string) => {
    return $axios.get(api.brands.all, {
        params: {
            limit: 12,
            page: page ?? 1,
        },
    })
}

export const getBrandById = (id: string) => {
    return $axios.get(api.brands.detail(id))
}

export const createBrand = (data: CreateBrandDto) => {
    return $axios.post(api.brands.all, data)
}

export const updateBrand = (data: BrandType) => {
    return $axios.patch(api.brands.detail(data.id), data)
}

export const deleteBrand = (id: string) => {
    return $axios.delete(api.brands.detail(id))
}
