import {$axios} from "../config/axios";
import { api } from "./api";

export const getAllBrands = () => {
    return fetch('http://localhost:8000/api/brands').then(data => data.json())
}