import {$axios} from "../config/axios";
import { api } from "./api";

export const getAllBrands =  () => {
    return $axios.get(api.brands.all);
}

export const createBrand = (data) => {
    return $axios.post(api.brands.all, data)
}