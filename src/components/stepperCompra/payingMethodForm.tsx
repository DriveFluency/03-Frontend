import { Pack } from "@/services/api";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material";
import PayingMethodFormText from "./payingMethodText";
import AliasCBUInfo from "./aliasCBUInfo";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { useCompra } from "./compraContext";
import { profile } from "console";

interface IAddressFormProps {
  handleBack: () => void;
  handleNext: () => void;
  selectedPack: Pack | null;
}

const PayingMethodForm = ({
  handleBack,
  handleNext,
  selectedPack,
}: IAddressFormProps) => {
  const { compra, updateCompra } = useCompra();
  const [method, setMethod] = useState<"efectivo" | "transferencia">(
    "efectivo"
  );
  const [receipt, setReceipt] = useState("nada");

  const handleChange = (e: any) => {
    setMethod(e.target.value);
    e.target.value === "efectivo" && setReceipt("nada");
  };

  const onSubmit = async () => {

    const newDni = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile') as string).dni : null;

    const compraData = {
      dni: Number(newDni),
      pack_id: selectedPack?.id,
      method: method,
      amount: selectedPack?.cost,
      receipt: receipt,
    };

    // const compraData = {
    //   dni: 23444,
    //   pack_id: 1,
    //   method: "efectivo",
    //   amount: 1770.00,
    //   receipt: 'nada',
    // };

    // updateCompra(compraData);

    try {
      const response = await fetch("http://conducirya.com.ar:8085/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(compraData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }

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

      <PayingMethodFormText />

      <form>
        <FormControl>
          {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
          <RadioGroup
            aria-labelledby="radio-buttons-group-label"
            defaultValue="efectivo"
            name="radio-buttons-group"
            value={method}
            onChange={handleChange}
          >
            <FormControlLabel
              value="efectivo"
              control={<Radio />}
              label="Efectivo en el punto de encuentro"
            />
            <FormControlLabel
              value="transferencia"
              control={<Radio />}
              label="Transferencia Bancaria"
            />
          </RadioGroup>
        </FormControl>

        {method === "transferencia" && <AliasCBUInfo />}

        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt={2}
          alignItems={"center"}
        >
          <Button onClick={handleBack}>Atrás</Button>
          <Button onClick={onSubmit}>Siguiente</Button>
        </Box>
      </form>
    </Box>
  );
};

export default PayingMethodForm;
