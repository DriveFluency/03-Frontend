import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

type MenuProps = {
    pages: Record<string, string>[]
}

export default function Menu(props: MenuProps) {

    const { pages } = props;

    return (
        <Box sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            background: "rgba(0, 53, 102, 0.47)",
            padding: "3px 0"
        }}>
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
    )

}