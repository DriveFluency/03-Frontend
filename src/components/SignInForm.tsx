import CustomField from "@/components/CustomField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Box from "@mui/material/Box";
import { Form } from "react-final-form";
import { validateForm } from "@/form/validation";
import { loginSchema } from "@/rules";
import { FORM_ERROR } from 'final-form';
import { Link } from "@mui/material";
import { login } from "@/services/api";
import { useRouter } from 'next/router';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function SignInForm(props: any) {

    const router = useRouter();

    const handleSubmit = async (values: any) => {
       const loginResult = await login(values.email, values.password);
       if (loginResult.success) {
        localStorage.setItem('token', loginResult.token as string);
        localStorage.setItem('profile', JSON.stringify(loginResult.profile));
        router.push("/dashboard");
        return;
       }

       return {
        [FORM_ERROR]: loginResult.message
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
                    <CustomField name="email" type="email" label="Email" fullWidth placeHolder="Ingrese su email"/>
                    <CustomField name="password" type="password" label="Contraseña" fullWidth placeHolder="Ingrese su contraseña"/>                        
                    
                    {   submitError && 
                        (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                            {submitError}
                        </FormFeedback>)
                    }
                      <Box
                        sx={{ display: "flex", justifyContent: "space-between", width: "100%", marginTop: "1rem" }}
                    >
                        <Link href="/ForgotPassword" sx={{}}>
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </Box>
                    
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