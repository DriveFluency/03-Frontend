import { Box, Button, Typography } from "@mui/material";

const AliasCBUInfo = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={3}>
      <Typography>
        Para realizar la compra bajo esta modalidad, transfiere o deposita el
        importe total en nuestra cuenta bancaria:
      </Typography>

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          width={"50%"}
          mt={1}
        >
          <Box
            display={"flex"}
            flexDirection={{
              xs: "column",
              lg: "row",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography>Alias:</Typography>
            <Typography>XXXXXXXXXXXXXXXXXXX</Typography>
          </Box>
          <Box
            display={"flex"}
            flexDirection={{
              xs: "column",
              lg: "row",
            }}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography>CBU/CVU: </Typography>
            <Typography>XXXXXXXXXXXXXXXXXXX</Typography>
          </Box>
        </Box>

        <Box>
            <Button
            variant="contained"
            size="small"
            >
              Adjuntar Comprobante
            </Button>
          
        </Box>
      </Box>
    </Box>
  );
};

export default AliasCBUInfo;
