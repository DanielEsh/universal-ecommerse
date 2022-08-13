import {$axios} from "../config/axios";
import { api } from "./api";

export type BrandType = {
    id: string
    name: string
    description: string
}

export const getAllBrands =  () => {
    return $axios.get(api.brands.all);
}

export const createBrand = (data: BrandType[]) => {
    return $axios.post(api.brands.all, data)
}