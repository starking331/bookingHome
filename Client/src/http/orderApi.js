import { $authHost, $host } from "./index";
import jwt_decode from "jwt-decode";

export const createOrder = async (order) => {
    const{data} = await $host.post('api/order', order);
    return data;
}

export const fetchOrder = async () => {
    const{data} = await $host.get('api/order');
    return data;
}

export const fetchOneOrder = async (id) => {
    const{data} = await $host.get('api/order/' + id);
    return data;
}

export const updateDate = async (id) => {
    const{data} = await $host.put('api/order/' + id);
    return data;
}

export const deleteQuery = async (id) => {
    const{data} = await $host.delete('api/order/' + id);
    return data;
}
