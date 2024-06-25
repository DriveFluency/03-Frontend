import TableBooking from "@/components/TableBooking"
import useTokenValidation from "@/hooks/useTokenValidation";
import DashboardLayout from "@/layouts/DashboardLayout"
import { Box, Typography } from "@mui/material";

const HistorialCompras = () => {

  useTokenValidation();
  
  return (
    <DashboardLayout>
      <Typography sx={{ 
        fontSize: "22px", 
        textAlign: "center", 
        textTransform: "uppercase", 
        fontWeight: "800",
        my: "20px" }}>
          Historial de Turnos
      </Typography>
      <div style={{ margin: "2rem" }}>      
        <TableBooking />
      </div>
    </DashboardLayout>
  )
}

export default HistorialCompras