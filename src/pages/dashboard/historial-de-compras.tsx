// /src/pages/dashboard/historial-de-compras.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import DashboardLayout from '@/layouts/DashboardLayout';
import { useEffect, useState } from 'react';
import useTokenValidation from '@/hooks/useTokenValidation';
import { StudentPack, getStudentPacks } from '@/services/api';
import { leerProfile } from '@/lib/utils';

const priceFormatter = (value: number) => {
  const valueFormatted = Number(value).toLocaleString('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });
  return valueFormatted;
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 30 },
  { field: 'Date', headerName: 'Fecha', width: 200 },
  { field: 'NamePack', headerName: 'Nombre del Pack', width: 200 },
  { field: 'Method', headerName: 'Método de Pago', width: 200 },
  { field: 'Cost', headerName: 'Precio', width: 100, valueFormatter: priceFormatter },
];

export default function HistorialDeCompras() {

  useTokenValidation();

  const [rows, setRows] = useState<StudentPack[]>([]);

  useEffect(() => {
    const fetchHistorial = async () => {
      const profile = leerProfile();
      const studentPackResult = await getStudentPacks(profile.dni);
      if (studentPackResult.success) {
        setRows(studentPackResult.studentPacks);
      }
    }

    fetchHistorial();
  }, [])

  return (
    <DashboardLayout>
      <Typography sx={{ 
        fontSize: "22px", 
        textAlign: "center", 
        textTransform: "uppercase", 
        fontWeight: "800",
        my: "20px" }}>
          Historial de Compras de Packs
      </Typography>
      <Box sx={{ height: 520, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </DashboardLayout>
  );
}
