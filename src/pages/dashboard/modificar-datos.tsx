import ModificarDatosForm from '@/components/ModificarDatosForm';
import useTokenValidation from '@/hooks/useTokenValidation';
import DashboardLayout from '@/layouts/DashboardLayout';
import AppFooter from '@/views/AppFooter';
import { Typography } from '@mui/material';

const ModificarDatos = () => {
  
  useTokenValidation();
  
  return (
    <DashboardLayout>
      <Typography sx={{ 
        fontSize: "22px", 
        textAlign: "center", 
        textTransform: "uppercase", 
        fontWeight: "800",
        my: "20px" }}>Configuración de Usuario</Typography>
      <ModificarDatosForm />
      <footer style={{ width: "100vw" }}>
        <AppFooter />
      </footer>
    </DashboardLayout>
  )
}

export default ModificarDatos;