import { api, setAuthToken } from './axiosConfig';

interface LoginResult {
    success: boolean;
    token?: string;
    message?: string;
}

export const login = async (email: string, password: string): Promise<LoginResult> => {
    try {
        const response = await api.post(`/login`, {
            username: email,
            password: password,
        });

        const data = response.data;

        // Set the token to the axios instance
        setAuthToken(data.access_token);

        return {
            success: true,
            token: data.access_token
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

export const logout = async() => {
    try {
        const response = await api.post(`/logout`);
        return {
            success: true,
            response: response?.data
        }
    } catch (error: any) {
        console.error(error);
        return {
            success: false,
            message: error.response?.data?.message || error.message,
        }
    } finally {
        setAuthToken('');
        localStorage.removeItem('token');
    }
}