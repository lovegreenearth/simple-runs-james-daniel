import axios from "axios";
import { getAuthUserData } from "@/utils/auth";
import { constant } from "@/utils/constant";

const api = axios.create({
    baseURL: constant.baseUrl,
});

api.interceptors.request.use((response) => {
    const userAuth = getAuthUserData();
    if (userAuth) {
        response.headers.Authorization = `Bearer ${userAuth.token}`;
    } else {
        delete response.headers.Authorization;
    }
    return response;
});

//---------------------Request-Demo-----------------------//
export const login = async(pagination) =>
    await api.post("user/pagination", pagination);