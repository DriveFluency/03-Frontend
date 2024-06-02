import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AddressFormText = () => {
    return (
      <>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
            <Image
              src={"/icons/car.png"}
              width={40}
              height={40}
              alt="car icon"
            />
            <Typography variant="h5" fontWeight={"bold"}>
              Pack 4 Clases - Caja Manual
            </Typography>
          </Box>
          <Typography variant="h5" fontWeight={"bold"}>
            Precio: $33.000
          </Typography>
        </Box>

        <Typography ml={7} align="justify" paragraph>
          Las clases tienen una duración de 60 minutos. <br />
          Contamos con instructores profesionales y nuestros autos poseen doble
          comando para más seguridad. <br />
          Atención a Domicilio. Podés elegir el punto de encuentro para iniciar
          tus clases.
        </Typography>

        <Box
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"center"}
          gap={"1rem"}
          my={2}
        >
          <Image
            src={"/icons/address.png"}
            width={40}
            height={40}
            alt="location icon"
          />
          <Typography variant="h5" fontWeight={"bold"} display={"inline"}>
            Seleccioná la Dirección de tu Clase de Manejo -
            <Typography
              variant="h5"
              fontWeight={"bold"}
              display={"inline"}
              color={"#9e9e9e"}
            >
              {" "}
              Capital Federal
            </Typography>
          </Typography>
        </Box>
      </>
    );
}

export default AddressFormText;