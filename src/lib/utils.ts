import { Profile } from "@/rules";

export const leerProfile = (): Profile => {
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