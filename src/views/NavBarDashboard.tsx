import PersonIcon from '@mui/icons-material/Person';
import { Typography } from '@mui/material';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { useEffect, useState, MouseEvent } from "react";


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Cerrar Sesion"];

function NavBarDashboard() {

  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    const profile = typeof window !== 'undefined' && localStorage.getItem('profile') 
    ? JSON.parse(localStorage.getItem('profile') as string) 
    : { firstName: '', lastName: '' };
    setProfileName(`${profile.firstName} ${profile.lastName}`)
  }, []);

  const handleLogout = async () => {
    console.log("Logout");
  };
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.2rem 0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Box
          component="img"
          src="/logo1.svg"
          alt="nombre"
          sx={{
            width: "40px",
          }}
        />

        <Box
          component="img"
          src="/logo2.svg"
          alt="nombre"
          sx={{
            width: "120px",
            marginLeft: "10px",
          }}
        />
      </div>

      <Box sx={{ flexGrow: 0 }}>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Typography sx={{ display: { xs: "none", md: "block" }, color: "white" }}>
            {profileName}
          </Typography>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 1, color: "gray", backgroundColor: "white" }}>
            <PersonIcon />
          </IconButton>

        </div>        {/* <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
          <MenuItem key={setting} onClick={setting === 'Cerrar Sesion' ? handleLogout : handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu> */}
      </Box>
    </Box>
  );
}
export default NavBarDashboard;
