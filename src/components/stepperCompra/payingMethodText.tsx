import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PayingMethodFormText = () => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Image src={"/icons/car.png"} width={40} height={40} alt="car icon" />
          <Typography variant="h5" fontWeight={"bold"}>
            Pack 4 Clases - Caja Manual
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Precio: $33.000
        </Typography>
      </Box>

      <Box
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"1rem"}
        mt={3}
      >
        <Image
          src={"/icons/pay.png"}
          width={40}
          height={40}
          alt="paying icon"
        />
        <Typography variant="h5" fontWeight={"bold"}>
          Seleccioná tu Método de Pago
        </Typography>
      </Box>
    </>
  );
};

export default PayingMethodFormText;
