import CustomField from "@/components/CustomField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Box from "@mui/material/Box";
import { Form, FormSpy } from "react-final-form";
import { useEffect, useState } from "react";
import { passwordReset, validatePasswordReset } from "@/services/api";
import { useRouter } from 'next/router';
import { FORM_ERROR } from 'final-form';
import { resetPasswordSchema } from "@/rules";
import { validateForm } from "@/form/validation";


const getTokenFromUrl = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('token') as string;
}

export default function PasswordResetForm() {
  const [sent, setSent] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = getTokenFromUrl();

    if (!token) {
      router.push("/SignIn");
    }

    const validate = async () => {
      const validateResult = await validatePasswordReset(token);

      if (!validateResult.success) {
        router.push('/SignIn');
        return;
      }  
    }

    validate();
  }, [router]);

  const handleSubmit = async (values: any) => {
    setSent(true);
    const token = getTokenFromUrl();
    const resetResult = await passwordReset(token, values.password);
    if (resetResult.success) {
      router.push('/SignIn');
      return;
    }

    return {
      [FORM_ERROR]: "Ocurrio un error al resetear la contraseña"
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      subscription={{ submitting: true, submitError: true }}
      validate={(values) => validateForm(values, resetPasswordSchema)}
    >
      {({ handleSubmit, submitting }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 6 }}
        >
          <CustomField name="password" type="password" label="Contraseña" fullWidth />
          <CustomField name="passwordConfirm" type="password" label="Repetir Contraseña" fullWidth />
          <FormSpy subscription={{ submitError: true }}>
            {({ submitError }) =>
              submitError ? (
                <FormFeedback error sx={{ mt: 2 }}>
                  {submitError}
                </FormFeedback>
              ) : null
            }
          </FormSpy>
          <Box
            sx={{ display: "flex", justifyContent: "center", width: "100%", mt: "20px" }}
          >
            <FormButton
              sx={{ color: "secondary.main", fontSize: "20px", width: "326px", height: "48px" }}
              disabled={submitting || sent}
            >
              {submitting || sent ? "In progress…" : "Cambiar contraseña"}
            </FormButton>

          </Box>

        </Box>
      )}
    </Form>
  )

}