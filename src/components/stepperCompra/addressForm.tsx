import { localidades } from "@/lib/localidadesCapital";
import CreateIcon from "@mui/icons-material/Create";
import {
  Box,
  Button,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import AddressFormText from "./addressFormText";
import { Pack } from "@/services/api";
import Image from "next/image";
import { useCompra } from "./compraContext";

interface IAddressFormProps {
  handleNext: () => void;
  selectedPack: Pack | null;
}

const AddressForm = ({ handleNext, selectedPack }: IAddressFormProps) => {
  const { updateCompra } = useCompra();

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
            {selectedPack?.name} <br /> {selectedPack?.description}
          </Typography>
        </Box>
        <Typography variant="h5" fontWeight={"bold"}>
          Precio: ${selectedPack?.cost}
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
            required
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
            label="Dirección:"
            variant="standard"
            required
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
