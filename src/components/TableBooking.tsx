import BookingService from '@/services/bookingService';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import * as React from 'react';

export default function ExportDefaultToolbar() {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const localStorageData = BookingService.getBookings();
    console.log(localStorageData);
    if (localStorageData) {
      setData(localStorageData as any);
    }
    setLoading(false);
  }, []);

  const columns = [
    { field: 'id', headerName: 'id', width: 200 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 150 },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'dni', headerName: 'DNI', width: 150 },
    { field: 'telefono', headerName: 'Telefono', width: 150 },
    { field: 'direccion', headerName: 'Direccion', width: 200 },
    { field: 'cursoContratado', headerName: 'Curso Contratado', width: 200 },
    
    { field: 'instructor', headerName: 'Instructor', width: 150 },
    { field: 'date', headerName: 'Date', width: 200 },
    { field: 'startTime', headerName: 'Start Time', width: 100 },
    { field: 'endTime', headerName: 'End Time', width: 100 },
  ];

  return (
    <div style={{  width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        slots={{ toolbar: GridToolbar }}
        pageSizeOptions={[10]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
      />
    </div>
  );
}
