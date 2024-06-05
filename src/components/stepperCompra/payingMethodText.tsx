import { Box, Typography } from "@mui/material";
import Image from "next/image";

const PayingMethodFormText = () => {
  return (
    <>
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
