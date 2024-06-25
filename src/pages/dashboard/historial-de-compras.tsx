// /src/pages/dashboard/historial-de-compras.tsx
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DashboardLayout from '@/layouts/DashboardLayout';
import styles from '../../styles/HistorialDeTurnos.module.css';

const columns: GridColDef[] = [
  { field: 'fechaCompra', headerName: 'Fecha de Compra', width: 150 },
  { field: 'nombrePack', headerName: 'Nombre Pack', width: 150 },
  { field: 'metodoPago', headerName: 'Método de Pago', width: 200 },
  { field: 'monto', headerName: 'Monto', width: 100 },
];

const rows = [
  { id: 1, fechaCompra: '2023-06-01', nombrePack: 'Pack 1', metodoPago: 'Tarjeta de Crédito', monto: '50.00' },
  { id: 2, fechaCompra: '2023-06-02', nombrePack: 'Pack 2', metodoPago: 'Paypal', monto: '75.00' },
  { id: 3, fechaCompra: '2023-06-03', nombrePack: 'Pack 3', metodoPago: 'Transferencia Bancaria', monto: '100.00' },
];

export default function HistorialDeCompras() {
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
