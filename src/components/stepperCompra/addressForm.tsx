import { localidades } from "@/lib/localidadesCapital";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import AddressFormText from "./addressFormText";
import { Pack } from "@/views/DialogPayment";
import Image from "next/image";

interface IAddressFormProps {
  handleNext: () => void;
  selectedPack: Pack | null;
}

const AddressForm = ({ handleNext, selectedPack }: IAddressFormProps) => {
  const onSubmit = () => {
    handleNext();
  };

  return (
    <Box display={"flex"} flexDirection={"column"} width={"80%"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box display={"flex"} alignItems={"center"} gap={"1rem"}>
          <Image src={"/icons/car.png"} width={40} height={40} alt="car icon" />
          <Typography variant="h5" fontWeight={"bold"}>
            {selectedPack?.title} <br/> {selectedPack?.description}
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Precio: ${selectedPack?.price}
        </Typography>
      </Box>

      <AddressFormText />

      <form>
        <Box
          display={"flex"}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          alignItems={"center"}
          justifyContent={"space-around"}
          gap={5}
        >
          <TextField
            select
            label={"Localidad"}
            sx={{
              width: {
                xs: "100%",
                md: "40%",
              },
            }}
          >
            {localidades.map((localidad) => (
              <MenuItem key={localidad.value} value={localidad.value}>
                {localidad.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label={"Dirección:"}
            variant="standard"
            sx={{
              width: {
                xs: "100%",
                md: "60%",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CreateIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          display={"flex"}
          justifyContent={{
            xs: "center",
            md: "flex-end",
          }}
          mt={2}
          alignItems={"center"}
        >
          <Button
            onClick={onSubmit}
            sx={{
              width: {
                xs: "100%",
                md: "auto",
              },
            }}
          >
            Siguiente
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddressForm;
