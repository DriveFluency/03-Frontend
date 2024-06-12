// /pages/historial-de-turnos.js
import DashboardLayout from '@/layouts/DashboardLayout';
import styles from '@/styles/HistorialDeTurnos.module.css';

const HistorialDeTurnos = () => {
  const turnos = [
    { id: 1, fecha: '2023-06-01', cliente: 'Cliente 1' },
    { id: 2, fecha: '2023-06-02', cliente: 'Cliente 2' },
    { id: 3, fecha: '2023-06-03', cliente: 'Cliente 3' },
  ];

  return (
    <DashboardLayout>
      <h1>Historial de Turnos</h1>
      <div className={styles.tabs}>
        <button className={styles.tabButton}>Agendar Turno</button>
        <button className={`${styles.tabButton} ${styles.active}`}>Ver historial</button>
      </div>
      <div className={styles.tableContainer}>
        {turnos.length > 0 ? (
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Turno ID</th>
                <th className={styles.th}>Fecha</th>
                <th className={styles.th}>Cliente</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <tr key={turno.id}>
                  <td className={styles.td}>{turno.id}</td>
                  <td className={styles.td}>{turno.fecha}</td>
                  <td className={styles.td}>{turno.cliente}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users for this project yet</p>
        )}
      </div>
    </DashboardLayout>
  );
};

export default HistorialDeTurnos;
