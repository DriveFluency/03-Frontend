import Typography from "../components/Typography";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Switch from "@mui/material/Switch";
import { Form, FormSpy } from "react-final-form";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import Box from "@mui/material/Box";
import CustomField from "./CustomField";
import { validateForm } from "@/form/validation";
import { registerSchema } from "../rules";


export default function RegisterForm() {

    const [sent, setSent] = useState(false);
    const [isOlderThan17, setIsOlderThan17] = useState(false);

    const handleSubmit = () => {
        setSent(true);
    };

    return (
        <Form
            onSubmit={handleSubmit}
            validate={(values) => validateForm(values, registerSchema)}
            subscription={{ submitting: true }}
        >
            {({ handleSubmit: handleSubmit2, submitting }) => (
                <Box
                    component="form"
                    onSubmit={handleSubmit2}
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
                            <CustomField name="firstName" label="Nombre" />
                            <CustomField name="telefono" label="Telefono" />
                            <CustomField name="ciudad" label="Ciudad" />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomField name="lastName" label="Apellido" />
                            <CustomField name="localidad" label="Localidad" />
                            <CustomField name="direccion" label="Dirección" />
                        </Grid>
                        <Grid item xs={12}>
                            <CustomField name="email" label="Email" type="email" fullWidth />
                            <CustomField name="password" label="Contraseña" type="password" fullWidth />
                        </Grid>
                    </Grid>

                    <FormSpy subscription={{ submitError: true }}>
                        {({ submitError }) =>
                            submitError ? (
                                <FormFeedback error sx={{ marginTop: "0.5rem" }}>
                                    {submitError}
                                </FormFeedback>
                            ) : null
                        }
                    </FormSpy>
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


