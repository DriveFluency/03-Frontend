import React, { useEffect, useState } from 'react';
import { Button, Box, Typography, Avatar, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CustomField from './CustomField';
import { Form } from 'react-final-form';
import { validateForm } from '@/form/validation';
import { profileSchema } from '@/rules';
import FormFeedback from '@/form/FormFeedback';
import { localidades } from "../lib/localidadesCapital";
import { Profile } from '@/rules';
import { saveProfile } from '@/services/api';

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
  };
};

const ModificarDatosForm: React.FC = () => {
  const [formData, setFormData] = useState<Profile>( {
    firstName: '',
    lastName: '',
    telefono: '',
    email: '',
    ciudad: '',
    localidad: '',
    direccion: '',
  });

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
    try {
      const saveResult = await saveProfile(values);
      if (!saveResult.success) {
        alert("Error guardando los datos. Intente nuevamente mas tarde");
      }
    } catch (err: any) {
      alert("Error guardando los datos. Intente nuevamente mas tarde");
    }
  };

  const handlePasswordUpdate = () => {
    // Add password update logic here
    console.log('Password Update');
  };

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
                <CustomField name="telefono" label="Telefono" onChange={handleChange} fullWidth underline editIcon />
                <CustomField name="email" type='email' label="Email" onChange={handleChange} fullWidth underline />
              </Grid>
              <Grid item xs={12} sm={6}>
                <CustomField name="lastName" label="Apellido" fullWidth underline readOnly />
                <CustomField name="localidad" label="Localidad" component="select" fullWidth underline>
                    <option value="">Elija Localidad</option>
                    {localidades.map((localidad) => (
                        <option key={localidad.label} value={localidad.label} selected={ localidad.label === formData.localidad }>{localidad.label}</option>
                    ))}
                </CustomField>
                <CustomField name="direccion" label="Dirección" onChange={handleChange} fullWidth underline editIcon />
              </Grid>
            </Grid>
            {submitError &&
              (<FormFeedback error sx={{ mt: 2, background: "none", p: 0, color: "#8D0000" }}>
                {submitError}
              </FormFeedback>)
            }
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              <Button variant="contained" color="primary" onClick={handleSave}>
                Guardar cambios
              </Button>
              <Button variant="contained" color="secondary" onClick={handlePasswordUpdate}>
                Actualizar contraseña
              </Button>
            </Box>
          </>
        )}
      </Form>
    </Box>
  );
};

export default ModificarDatosForm;
