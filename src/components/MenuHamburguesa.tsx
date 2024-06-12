import MenuIcon from "@mui/icons-material/Menu";
import {
    Container,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

type MenuHamburguesaProps = {
    pages: Record<string, string>[]
}

export default function MenuHamburguesa(props: MenuHamburguesaProps) {

    const { pages } = props;

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
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
                            <a href={`/#${page.id}`}>{page.title}</a>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )

}