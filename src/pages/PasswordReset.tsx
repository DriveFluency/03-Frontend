import * as React from "react";
import Typography from "../components/Typography";
import AppAppBar from "../views/AppAppBar";
import AppFooter from "../views/AppFooter";
import AppForm from "../views/AppForm";
import withRoot from "../withRoot";
import PasswordResetForm from "@/components/PasswordResetForm";


function PasswordReset() {
  return (
    <React.Fragment>
      <AppAppBar mostrarMenu={false} mostrarMenuHamburguesa={false} />
      <AppForm>
        <PasswordResetForm />
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(PasswordReset);
