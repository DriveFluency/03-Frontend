import CustomField from "@/components/CustomField";
import FormButton from "../form/FormButton";
import FormFeedback from "../form/FormFeedback";
import Box from "@mui/material/Box";
import { Form, FormSpy } from "react-final-form";
import { useState} from "react";



export default function ForgotPasswordForm(){
    const [sent, setSent] = useState(false);



    const handleSubmit = () => {
      setSent(true);
    };

    return(
        <Form
        onSubmit={handleSubmit}
        subscription={{ submitting: true }}
       
      >
        {({ handleSubmit: handleSubmit2, submitting }) => (
          <Box
            component="form"
            onSubmit={handleSubmit2}
            noValidate
            sx={{ mt: 6 }}
          >
            <CustomField name="email" type="email" label="Email" fullWidth />
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
              {submitting || sent ? "In progress…" : "Enviar Link de reseteo"}
            </FormButton>

            </Box>
          
          </Box>
        )}
      </Form>
    )

}