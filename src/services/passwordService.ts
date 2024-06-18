import { api } from './axiosConfig';

// TODO: Esperando implementacion del backend
export const reset = async (email: string) => {
    try {
        await api.post(`/reset`, {
            username: email,
        });

        return {
            success: true,
        }
    } catch (error: any) {       
        return {
            success: false,
            message: error.response?.data?.message || error.message,
        }
    }
}

// TODO: Esperando implementacion del backend, retorna exito por default
export const passwordReset = async (token: string, password: string) => {
    return {
        success: true
    }
}

// TODO: Esperando implementacion del backend, retorna exito por default
export const validatePasswordReset = async (token: string) => {
    return {
        success: true
    }
}