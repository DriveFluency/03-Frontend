import { Box, Typography } from "@mui/material";
import Image from "next/image";

const AddressFormText = () => {
    return (
      <>        
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
              variant="body1"
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