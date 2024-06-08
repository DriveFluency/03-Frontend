import CustomField from "@/components/CustomField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Box from "@mui/material/Box";
import { Form } from "react-final-form";
import { validateForm } from "@/form/validation";
import { loginSchema } from "@/rules";
import { FORM_ERROR } from 'final-form'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function SignInForm(props: any) {
    const handleSubmit = async () => {
        await sleep(1000)
        return { 
            [FORM_ERROR]: "Usuario o contraseña invalido" 
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