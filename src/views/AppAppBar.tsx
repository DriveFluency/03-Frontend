import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
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

function AppAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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
          <Box sx={{flex: 1, display: "flex" }}>
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
              sx={{ width: "150px", marginLeft: "20px", display:{ xs: "none", md: "block"} }}
            />
          </Box>
          <Box sx={{ justifyContent: "flex-end", alignItems: "center" }}>
            <Button sx={{ color: "#fff", fontSize: "1.3rem" }}>Ingresar</Button>
            <Button sx={{ color: "secondary.main", fontSize: "1.3rem" }}>
              Registrarse
            </Button>
          </Box>
          {/* Menu Hamburguesa */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="Menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              slotProps={{
                paper: {
                  sx: {
                    width: "100vw",
                    maxWidth: "100vw",
                    left: "0 !important",
                    top: 0,
                    marginTop: "19px",
                    position: "fixed",
                    borderRadius: 0,
                    background: "rgba(0, 53, 102, 0.8)",
                    color: "#FFF",
                  },
                },
              }}
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{ justifyContent: "flex-end", marginRight: "18px" }}
                >
                  <Typography textAlign="center">
                    <a href={`#${page.id}`}>{page.title}</a> 
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>

        {/* Menu */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            background: "rgba(0, 53, 102, 0.47)",
            padding: "3px 0",
          }}
        >
          <Container>
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                justifyContent: "center",
              }}
            >
              {pages.map((page) => (
                <li key={page.id}>
                  <a
                    href={`#${page.id}`}
                    onClick={handleCloseNavMenu}
                    style={{
                      margin: "2px 32px",
                      color: "white",
                      display: "block",
                      fontSize: "1.2rem",
                      textTransform: "none",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </Box>
      </AppBar>
    </>
  );
}

export default AppAppBar;
