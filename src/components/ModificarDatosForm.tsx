import FormFeedback from '@/form/FormFeedback';
import { validateForm } from '@/form/validation';
import { Profile, profileSchema } from '@/rules';
import { saveProfile } from '@/services/api';
import EditIcon from '@mui/icons-material/Edit';
import { Alert, AlertColor, Avatar, Box, Button, Grid, IconButton, Snackbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-final-form';
import { localidades } from "../lib/localidadesCapital";
import CustomField from './CustomField';
import PasswordChangeModal from './PasswordChangeModal';


const leerProfile = (): Profile => {
  if (typeof window !== 'undefined') { // Verifica si estamos en el cliente
    const profile = localStorage.getItem('profile');
    if (profile) {
      return JSON.parse(profile);
    }
  }
  return {
    firstName: '',
    lastName: '',
    telefono: '',
    email: '',
    ciudad: '',
    localidad: '',
    direccion: '',
    dni: '',
  };
};

const ModificarDatosForm: React.FC = () => {

  const [notification, setNotification] = useState<{ open: boolean, type: AlertColor, message: string}>({
    open: false,
    type: 'success',
    message: ''
  });

  const [formData, setFormData] = useState<Profile>( {
    firstName: '',
    lastName: '',
    telefono: '',
    email: '',
    ciudad: '',
    localidad: '',
    direccion: '',
    dni: '',
  });

  const [isPasswordModalOpen, setPasswordModalOpen] = useState(false);

  // Leer profile desde localStorage al renderizar
  useEffect(() => {
    const profileData = leerProfile();
    setFormData(profileData);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async (values: Profile) => {
    const saveResult = await saveProfile(values);
    if (!saveResult.success) {
      setNotification({
        open: true,
        type: 'error',
        message: 'Ha ocurrido un error al guardar los datos'
      });
      return;
    }
    setNotification({
      open: true,
      type: 'success',
      message: 'Los datos se han guardado con exito'
    })
  };

  const handlePasswordUpdate = () => {
    console.log('Contraseña actualizada');
  };

  const handleNotificationClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setNotification({
      ...notification,
      open: false,
    });
  }

  return (
    <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: 2, maxWidth: 600, mx: 'auto' }}>
      <Typography 
        variant="h5" 
        align="center" 
        mb={2} 
        sx={{ 
          background: "#001D3D", 
          color: "#FFF", 
          fontSize:"14px", 
          p: "5px" 
        }}>
        Editar Perfil
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Avatar sx={{ width: 56, height: 56, mr: 2 }}>A</Avatar>
        <IconButton aria-label="edit profile picture">
          <EditIcon />
        </IconButton>
      </Box>
      <Form
        onSubmit={handleSave}
        subscription={{ submitting: true, submitError: true }}
        validate={(values) => validateForm(values, profileSchema)}
        initialValues={formData}
      >
        {({ handleSubmit: handleSave, submitting, submitError }) => (
          <>
            <Grid container spacing={2} sx={{ mb: "26px" }}>
              <Grid item xs={12} sm={6}>
                <CustomField name="firstName" label="Nombre" fullWidth underline readOnly />
                <CustomField name="dni" label="DNI" fullWidth underline readOnly />
                <CustomField name="telefono" label="Telefono" onChange={handleChange} fullWidth underline editIcon />
                <CustomField name="email" type='email' label="Email" onChange={handleChange} fullWidth underline />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomField name="lastName" label="Apellido" fullWidth underline readOnly />
                <CustomField name="localidad" label="Localidad" component="select" options={localidades} fullWidth underline />
                <CustomField name="direccion" label="Dirección" onChange={handleChange} fullWidth underline editIcon />
              </Grid>
            </Grid>
            {submitError &&
              (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                {submitError}
              </FormFeedback>)
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button disabled={submitting} variant="contained" color="primary" onClick={handleSave}>
                {submitting ? "En Progreso…" : "Guardar Cambios"}
              </Button>
              <Button variant="contained" color="secondary" onClick={() => setPasswordModalOpen(true)}>
                Actualizar contraseña
              </Button>
            </Box>
          </>
        )}
      </Form>
      <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleNotificationClose}>
        <Alert
          onClose={handleNotificationClose}
          severity={notification.type}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      <PasswordChangeModal 
        open={isPasswordModalOpen} 
        onClose={() => setPasswordModalOpen(false)} 
        onSave={handlePasswordUpdate} 
      />
    </Box>
  );
};

export default ModificarDatosForm;
