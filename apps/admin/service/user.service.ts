import {$axios} from "../config/axios";
import { api } from "./api";

export async function getUser(): Promise<any> {
    const { data } = await $axios.get(api.user.all)
    return data;
}
