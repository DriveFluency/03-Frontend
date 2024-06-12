import axios from "axios";

const API_BASE_URL = "http://conducirya.com.ar:8085";

interface LoginResult {
    success: boolean;
    token?: string;
    message?: string;
}

export const login = async (email: string, password: string): Promise<LoginResult> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, {
            username: email,
            password: password,
        });

        const data = response.data;

        return {
            success: true,
            token: data.access_token
        }

    } catch (error: any) {
        let message;
        if (error.response.status === 401) {
            message = 'Usuario o contraseña invalido';
        } 
        
        return {
            success: false,
            message: message || error.response?.data?.message || error.message,
        }
    }
}