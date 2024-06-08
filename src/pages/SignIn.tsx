import Box from "@mui/material/Box";
import { Fragment } from "react";
import Typography from "../components/Typography";
import withRoot from "../withRoot";
import AppAppBar from "@/views/AppAppBar";
import AppForm from "@/views/AppForm";
import AppFooter from "@/views/AppFooter";
import Link from "@mui/material/Link";
import SignInForm from "@/components/SignInForm";

function SignIn() {
  return (
    <Fragment>
       <AppAppBar mostrarMenu={false} mostrarMenuHamburguesa={false} /> 
      <AppForm> 
        <Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center"
          sx={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}
          >
            Ingresar
          </Typography>
          <Box sx={{ borderTop: "3px solid #FFC300", width:"90px", m:"0 auto", position:"relative",top: "-10px" }}/>

          <Typography variant="body2" align="center" sx={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}>
            Aún no posees cuenta con nosotros? <br /> 
            <Link href="/Register" sx={{ color: "#FFC300" }}> Registrarte aquí</Link>
          </Typography>
        </Fragment>
        
        <SignInForm />
        
        <Typography align="center">
         
        </Typography>
       </AppForm> 
       <AppFooter />
    </Fragment>
  );
}

export default withRoot(SignIn);
