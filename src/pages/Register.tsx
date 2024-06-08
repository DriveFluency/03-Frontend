import Box from "@mui/material/Box";
import { Fragment } from "react";
import AppAppBar from "@/views/AppAppBar";
import AppFooter from "../views/AppFooter";
import AppForm from "../views/AppForm";
import withRoot from "../withRoot";
import Typography from "../components/Typography";
import Link from "@mui/material/Link";
import RegisterForm from "../components/RegisterForm";

function Register() {

  return (
    <Fragment>
      <AppAppBar mostrarMenu={false} mostrarMenuHamburguesa={false} />
      <AppForm>
        <Fragment>
          <Typography
            gutterBottom
            variant="h3"
            marked="center"
            align="center"
            sx={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
          >
            REGISTRO
          </Typography>
          <Box sx={{ borderTop: "3px solid #FFC300", width: "90px", m: "0 auto", position: "relative", top: "-10px" }} />
          <Typography variant="body2" align="center" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}>
            Ya posees cuenta con nosotros? <br />
            <Link href="/SignIn" sx={{ color: "#FFC300" }}>Ingresa aquí</Link>
          </Typography>
        </Fragment>
        <RegisterForm />
      </AppForm>
      <AppFooter />
    </Fragment>
  );
}

export default withRoot(Register);
