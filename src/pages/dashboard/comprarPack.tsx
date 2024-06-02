import CompraStepper from "@/components/stepperCompra";
import DashboardLayout from "@/layouts/DashboardLayout";
import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const ComprarPackPage = () => {
  return (
    <DashboardLayout>
      <Box display={"flex"} flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#001D3D"}
          paddingY={"2rem"}
        >
          <Typography variant="h4" color={"white"}>
            Comprar Pack
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          justifyContent={{
            xs: "center",
            md: "space-around",
          }}
          alignItems={"center"}
          gap={"1rem"}
          marginTop={"2rem"}
          width={{
            xs: "100%",
            md: "80%",
          }}
        >
          <Link href={"/#pack-de-clases"}>
            <Image
              src={"/icons/arrow_back.png"}
              width={60}
              height={60}
              alt="go back arrow"
            />
          </Link>

          <Paper
            elevation={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.5rem 3.5rem",
              bgcolor: "secondary.main",
            }}
          >
            <Typography
              variant="h5"
              fontWeight={'bold'}
              textAlign={'center'}
            >
              Pack 4 Clases - Manual con Atención a Domicilio
            </Typography>
          </Paper>
        </Box>

        <CompraStepper/>

      </Box>
    </DashboardLayout>
  );
};

export default ComprarPackPage;
