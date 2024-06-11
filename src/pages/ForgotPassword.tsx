import * as React from "react";
import Typography from "../components/Typography";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import AppForm from "../views/AppForm";
import withRoot from "../withRoot";
import ForgotPasswordForm from "@/components/ForgotPasswordForm";


function ForgotPassword() {


  return (
    <React.Fragment>
      <AppAppBar mostrarMenu={false} mostrarMenuHamburguesa={false} />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center"
            sx={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
          >
            Olvido su contraseña?
          </Typography>
          <Typography variant="body2" align="center"
            sx={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}
          >
            {"Ingrese su dirección de correo electrónico a continuación" +
              " y le enviaremos un enlace para restablecer su contraseña."}
          </Typography>
        </React.Fragment>
        <ForgotPasswordForm />

      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(ForgotPassword);
