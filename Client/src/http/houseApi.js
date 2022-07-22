import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createHouse = async (house) => {
    const{data} = await $authHost.post('api/house', house);
    return data;
}

export const fetchHouse = async () => {
    const{data} = await $host.get('api/house');
    return data;
}

export const fetchOneHouse = async (id) => {
    const{data} = await $host.get('api/house/' + id);
    return data;
}
