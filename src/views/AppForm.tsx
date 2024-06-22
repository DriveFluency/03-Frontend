import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "../components/Paper";

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Container maxWidth="sm" sx={{ mt:"100px"}}>
        <Box sx={{ mt: 7, mb: 7 }}>
          <Paper
            background="light"
            sx={{ pt: { xs: "56px", md: "56px" },pb: { xs: "38px", md: "38px"}, px: { xs: 3, md: 6 }, background: "rgba(114, 134, 160, 0.8)" }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
