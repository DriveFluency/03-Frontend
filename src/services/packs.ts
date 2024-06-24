import { api } from "./axiosConfig";

export const getPacks = async() => {
    try {
        const response = await api.get(`/packs`);
        const data = response.data;
        return data;
        
    } catch (error: any) {
        console.error(error);
        
    } 
}