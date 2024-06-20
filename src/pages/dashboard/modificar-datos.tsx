import ModificarDatosForm from '@/components/ModificarDatosForm';
import DashboardLayout from '@/layouts/DashboardLayout';
import { Typography } from '@mui/material';



const ModificarDatos = () => {
  return (
    <DashboardLayout>
      <Typography sx={{ 
        fontSize: "22px", 
        textAlign: "center", 
        textTransform: "uppercase", 
        fontWeight: "800",
        my: "20px" }}>Configuración de Usuario</Typography>
      <ModificarDatosForm />
    </DashboardLayout>
  )
}

export default ModificarDatos;