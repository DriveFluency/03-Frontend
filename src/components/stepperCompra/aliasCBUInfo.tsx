import { Box, Button, Typography, styled } from "@mui/material";

const Input = styled("input")({
  display: "none",
});

const AliasCBUInfo = () => {

  const handleButtonClick = () => {
    const inputElement = document.getElementById("comprobante");
    if (inputElement) {
      inputElement.click();
    }
  };

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
            onClick={handleButtonClick}
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            Adjuntar Comprobante
            {/* <Input type="file" id="comprobante" accept="image/*,.pdf" /> */}
            <input type="file" id="comprobante" accept="image/*,.pdf" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AliasCBUInfo;
