import * as yup from "yup";

export const registerSchema = yup.object({
    firstName: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Mínimo 3 caracteres")
        .max(20, "Máximo 20 caracteres"),
    telefono: yup
        .string()
        .required("Este campo es requerido")
        .min(8, "minimo 8 números"),
    dni: yup
        .string()
        .required("Este campo es requerido")
        .min(8, "minimo 8 números"),
    lastName: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Mínimo 3 caracteres")
        .max(20, "Máximo 20 caracteres"),
    email: yup
        .string()
        .required("Este campo es requerido")
        .email("Correo inválido")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    ciudad: yup
        .string()
        .required("Este campo es requerido"),
    localidad: yup
        .string()
        .required("Este campo es requerido"),
    direccion: yup
        .string()
        .min(5, "Mínimo 5 caracteres")
        .required("Este campo es requerido"),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/[a-z]/, 'La contraseña debe tener al menos una letra minúscula')
        .matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula')
        .matches(/[0-9]/, 'La contraseña debe tener al menos un número')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe tener al menos un carácter especial')
        .required('La contraseña es obligatoria')
});

export const loginSchema = yup.object({
    email: yup
        .string()
        .required("Este campo es requerido")
        .email("Correo inválido")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    password: yup
        .string()
        .required('Contraseña requerida')
});

export type ResetPassword = {
    currentPassword: string,
    password: string,
}

export const resetPasswordSchema = yup.object({
    currentPassword: yup
        .string()
        .required('La contraseña actual es requerida'),
    password: yup
        .string()
        .min(8, 'La contraseña debe tener al menos 8 caracteres')
        .matches(/[a-z]/, 'La contraseña debe tener al menos una letra minúscula')
        .matches(/[A-Z]/, 'La contraseña debe tener al menos una letra mayúscula')
        .matches(/[0-9]/, 'La contraseña debe tener al menos un número')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'La contraseña debe tener al menos un carácter especial')
        .required('La contraseña no puede estar vacia'),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password')], 'Las contraseñas no coinciden')
        .required('La confirmación de la contraseña no puede estar vacía')
});


export type Profile = {
    firstName: string,
    lastName: string,
    dni: string,
    localidad: string,
    ciudad: string,
    direccion: string,
    telefono: string,
    email: string,
}

export const profileSchema = yup.object({
    firstName: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Mínimo 3 caracteres")
        .max(20, "Máximo 20 caracteres"),
    telefono: yup
        .string()
        .required("Este campo es requerido")
        .min(8, "minimo 8 números"),
    dni: yup
        .string()
        .required("Este campo es requerido")
        .min(8, "minimo 8 números"),
    lastName: yup
        .string()
        .required("Este campo es requerido")
        .min(3, "Mínimo 3 caracteres")
        .max(20, "Máximo 20 caracteres"),
    email: yup
        .string()
        .required("Este campo es requerido")
        .email("Correo inválido")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ser un email valido"),
    ciudad: yup
        .string()
        .required("Este campo es requerido"),
    localidad: yup
        .string()
        .required("Este campo es requerido"),
    direccion: yup
        .string()
        .min(5, "Mínimo 5 caracteres")
        .required("Este campo es requerido"),
})