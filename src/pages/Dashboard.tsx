import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Usuarios Activos</h2>
          <p className="text-3xl font-bold text-blue-600">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Pedidos Pendientes</h2>
          <p className="text-3xl font-bold text-orange-600">23</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">Ingresos del Mes</h2>
          <p className="text-3xl font-bold text-green-600">$12,450</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;