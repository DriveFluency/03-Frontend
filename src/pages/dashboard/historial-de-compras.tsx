import TableBooking from "@/components/TableBooking"
import useTokenValidation from "@/hooks/useTokenValidation";
import DashboardLayout from "@/layouts/DashboardLayout"

const HistorialCompras = () => {

  useTokenValidation();
  
  return (
    <DashboardLayout>
      <div style={{ margin: "2rem" }}>      
        <TableBooking />
      </div>
    </DashboardLayout>
  )
}

export default HistorialCompras