import {$axios} from "../config/axios";

export async function getUser(): Promise<any> {
    const { data } = await $axios.get(`/user/`)
    return data;
}
