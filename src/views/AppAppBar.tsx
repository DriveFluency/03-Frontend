import Menu from "@/components/Menu";
import MenuHamburguesa from "@/components/MenuHamburguesa";
import useHasToken from "@/hooks/useHasToken";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRouter } from 'next/router';
import AppBar from "../components/AppBar";
import Toolbar from "../components/Toolbar";

const pages = [
  {
    id: "inicio",
    title: "Inicio",
  },
  {
    id: "ruta-al-volante",
    title: "Ruta al volante"
  },
  {
    id: "pack-de-clases",
    title: "Pack de clases"
  },
  {
    id: "preguntas-frecuentes",
    title: "Preguntas frecuentes"
  }
];

type AppAppBarProps = {
  mostrarMenu?: boolean;
  mostrarMenuHamburguesa?: boolean;
}

function AppAppBar(props: AppAppBarProps) {
  const hasToken = useHasToken();

  const {
    mostrarMenu = true,
    mostrarMenuHamburguesa = true
  } = props;

  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/SignIn');
  }

  const handleRegisterClick = () => {
    router.push('/Register')
  }

  return (
    <>
      <AppBar position="fixed" sx={{ flex: 1, background: "none" }}>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flex: 1,
            backgroundColor: "primary.dark",
            padding: "11px 0",
          }}
        >

          <Link href="/" sx={{ flex: 1, display: "flex" }}>
            <Box
              component="img"
              src="/logo1.svg"
              alt="logo"
              sx={{ width: "70px" }}
            />
            <Box
              component="img"
              src="/logo2.svg"
              alt="nombre"
              sx={{ width: "150px", marginLeft: "20px", display: { xs: "none", md: "block" } }}
            />
          </Link>

          {hasToken && (
            <Button
              onClick={() => router.push('/dashboard')}
              sx={{ color: "#fff", fontSize: "1.3rem" }}
            >
              Dashboard
            </Button>
          )}

          {!hasToken && (

            <Box sx={{ justifyContent: "flex-end", alignItems: "center" }}>
              <Button sx={{ color: "#fff", fontSize: "1.3rem" }} onClick={handleSignInClick}>Ingresar</Button>
              <Button sx={{ color: "secondary.main", fontSize: "1.3rem" }} onClick={handleRegisterClick}>
                Registrarse
              </Button>
            </Box>
          )}

          {mostrarMenuHamburguesa &&
            <MenuHamburguesa pages={pages} />}
        </Toolbar>

        {mostrarMenu &&
          <Menu pages={pages} />}

      </AppBar>
    </>
  );
}

export default AppAppBar;
