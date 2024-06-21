import Typography from "../components/Typography";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Switch from "@mui/material/Switch";
import { Form } from "react-final-form";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Box from "@mui/material/Box";
import CustomField from "./CustomField";
import { validateForm } from "@/form/validation";
import { registerSchema } from "../rules";
import { localidades } from "../lib/localidadesCapital";
import { FORM_ERROR } from 'final-form'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default function RegisterForm() {
    const [sent, setSent] = useState(false);
    const [isOlderThan17, setIsOlderThan17] = useState(false);

    const handleSubmit = async () => {
        await sleep(1000)
        return { 
            [FORM_ERROR]: "Error enviando formulario" 
        }
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={(values) => validateForm(values, registerSchema)}
            subscription={{ submitting: true, submitError: true }}
        >
            {({ handleSubmit, submitting, submitError }) => (
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ padding: "0 2rem", borderRadius: "0.5rem" }}
                >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <Typography variant="body2" sx={{ fontWeight: "bold", fontSize: "16px" }}>
                            ¿Posees más de 17 años?
                        </Typography>
                        <Switch
                            checked={isOlderThan17}
                            onChange={() => setIsOlderThan17(!isOlderThan17)}
                            inputProps={{ 'aria-label': '¿Posees más de 17 años?' }}
                        />
                    </div>

                    <Grid container spacing={2} sx={{ mb: "26px" }}>
                        <Grid item xs={12} sm={6}>
                            <CustomField name="firstName" label="Nombre" placeHolder="Ingrese su Nombre"/>
                            <CustomField name="dni" label="DNI" placeHolder="Ingrese su DNI" type="number"/>
                            <CustomField name="ciudad" label="Ciudad" placeHolder="Ingrese su Ciudad"/>
                            <CustomField name="telefono" label="Telefono" placeHolder="Ingrese su Telefono"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomField name="lastName" label="Apellido" placeHolder="Ingrese su Apellido"/>
                            <CustomField name="localidad" label="Localidad" component="select"  placeHolder="Elija su Localidad" options={localidades} fullWidth underline />
                            <CustomField name="direccion" label="Dirección" placeHolder="Ingrese su Dirección"/>
                        </Grid>
                        <Grid item xs={12}>
                            <CustomField name="email" label="Email" type="email" fullWidth placeHolder="Ingrese su Email"/>
                            <CustomField name="password" label="Contraseña" type="password" fullWidth placeHolder="Ingrese su Contraseña" />
                        </Grid>
                    </Grid>

                    {   submitError && 
                        (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000", mb: "26px" }}>
                            {submitError}
                        </FormFeedback>)
                    }

                    <Box
                        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
                    >
                        <FormButton
                            sx={{ color: "secondary.main", fontSize: "20px", width: "326px", height: "48px" }}
                            disabled={submitting || sent}
                        >
                            {submitting || sent ? "En Progreso…" : "REGISTRAR"}
                        </FormButton>
                    </Box>
                </Box>
            )}
        </Form>
    )
}
