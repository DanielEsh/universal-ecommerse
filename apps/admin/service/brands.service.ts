import {$axios} from "../config/axios";
import { api } from "./api";

export const getAllBrands =  () => {
    return $axios.get(api.brands.all);
}