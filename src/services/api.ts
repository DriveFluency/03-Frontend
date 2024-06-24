import { Profile, ResetPassword } from "@/rules";
import axios from "axios";
import jwt from 'jsonwebtoken';


// IMPORTANTE: Si se necesita cambiar la url se tiene que hacer en el archivo .env.local
// Revisar .env.example
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8085";

// Create an axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Function to set token
export const setAuthToken = (token: string) => {
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

type ApiResponse<T> = {
    success: true;
} & T

type ApiError = {
    success: false;
    message: string;
}

type LoginResponse = {
    token: string;
    profile: Profile;
}


export const register  = async (values: Profile & { password: string }): Promise<ApiResponse<null> | ApiError> => {
    try {
        await api.post('/register', values);
        return {
            success: true
        } as ApiResponse<null>;
    } catch (error: any) {
        let message = 'Error desconocido';
        if (error.response && error.response.data && error.response.data.error) {
            message = error.response.data.error;
        } else if (error.message) {
            message = error.message;
        }
        return {
            success: false,
            message: message
        } as ApiError;
    }
}

export const login = async (username: string, password: string): Promise<ApiResponse<LoginResponse> | ApiError> => {
    try {
        const response = await api.post(`/login`, {
            username,
            password,
        });

        const data = response.data;

        // Set the token to the axios instance
        setAuthToken(data.access_token);

        const decodedToken: any = jwt.decode(data.access_token);
        const {
            email,
            firstName,
            lastName,
            dni,
            telefono,
            ciudad,
            localidad,
            direccion,
        } = decodedToken;

        return {
            success: true,
            token: data.access_token,
            profile: {
                email,
                firstName,
                lastName,
                dni,
                telefono,
                ciudad,
                localidad,
                direccion,    
            }
        }

    } catch (error: any) {
        let message;
        if (error.response?.status === 401) {
            message = 'Usuario o contraseña invalido';
        }

        return {
            success: false,
            message: message || error.response?.data?.message || error.message,
        }
    }
}

// TODO: Esperando implementacion del backend
export const reset = async (email: string): Promise<ApiResponse<null> | ApiError> => {
    try {
        await api.post(`/reset`, {
            username: email,
        }
    );
        return {
            success: true,
        } as ApiResponse<null>;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || error.message,
        }
    }
}

// TODO: Esperando implementacion del backend, retorna exito por default
export const passwordReset = async (token: string, password: string): Promise<ApiResponse<null> | ApiError> => {
    return {
        success: true
    } as ApiResponse<null>;
}

// TODO: Esperando implementacion del backend, retorna exito por default
export const validatePasswordReset = async (token: string): Promise<ApiResponse<null> | ApiError> => {
    return {
        success: true
    } as ApiResponse<null>;
}

// TODO: Esperando implementacion del backend, guarda en local storage
export const saveProfile = async (profile: Profile): Promise<ApiResponse<null> | ApiError> => {
    try {    
        await api.put('/profile', profile);
        localStorage.setItem('profile', JSON.stringify(profile));
        return {
            success: true
        } as ApiResponse<null>;
    } catch (error: any) {
        return {
            success: false,
            message: error.response?.data?.message || error.message || "Ocurrio un error al guardar el perfil",
        }
    }

}

// TODO: Esperando implementacion del backend
export const changePassword = async (values: ResetPassword): Promise<ApiResponse<null> | ApiError> => {
    try {
        await api.post('/change', {
            current_password: values.currentPassword,
            new_password: values.password,
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        return {
            success: true
        } as ApiResponse<null>;
    } catch(error: any) {
        return {
            success: false,
            message: error.response?.data?.message || error.message || "Error desconocido al intentar cambio de contraseña"
        }
    }
}