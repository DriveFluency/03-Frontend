import CustomField from "@/components/CustomField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Box from "@mui/material/Box";
import { Form } from "react-final-form";
import { validateForm } from "@/form/validation";
import { loginSchema } from "@/rules";
import { FORM_ERROR } from 'final-form';
import axios from "axios";

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function SignInForm(props: any) {
    const handleSubmit = async (values: any) => {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
                username: values.email,
                password: values.password,
            });

            const data = response.data;

            // Manejar el éxito del login, como almacenar el token, redirigir, etc.
            console.log('Login exitoso', data);

        } catch (error: any) {
            let message;
            if (error.response.status === 401) {
                message = 'Usuario o contraseña invalido';
            } 
            return {
                [FORM_ERROR]: message || error.response?.data?.message || error.message
            };
        }
    };


    return (
        <Form
            onSubmit={handleSubmit}
            subscription={{ submitting: true, submitError: true }}
            validate={(values) => validateForm(values, loginSchema)}
        >
            {({ handleSubmit, submitting, submitError }) => (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 6 }}
                >
                    <CustomField name="email" type="email" label="Email" fullWidth />
                    <CustomField name="password" type="password" label="Contraseña" fullWidth />                        
                    
                    {   submitError && 
                        (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                            {submitError}
                        </FormFeedback>)
                    }
                    
                    <Box
                        sx={{ display: "flex", justifyContent: "center", width: "100%", mt: "20px" }}
                    >
                        <FormButton
                            sx={{ color: "secondary.main", fontSize: "20px", width: "326px", height: "48px" }}
                            disabled={submitting}
                        >
                            {submitting ? "En Progreso…" : "INGRESAR"}
                        </FormButton>

                    </Box>
                </Box>
            )}
        </Form>
    )
}