import React from 'react';
import { utils, writeFile } from 'xlsx';
import DataTable from '../components/DataTable';
import { mockUsers } from '../data/mockData';

const Users = () => {
  const columns = [
    { key: 'name', title: 'Nombre', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'role', title: 'Rol', sortable: true },
    {
      key: 'status',
      title: 'Estado',
      sortable: true,
      render: (value: string) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            value === 'Active'
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          {value}
        </span>
      ),
    },
  ];

  const handleRefresh = () => {
    // Implement refresh logic
    console.log('Refreshing data...');
  };

  const handleDownload = () => {
    const ws = utils.json_to_sheet(mockUsers);
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, 'Users');
    writeFile(wb, 'users.xlsx');
  };

  const handleAdd = () => {
    console.log('Adding new user...');
  };

  const handleEdit = (user: any) => {
    console.log('Editing user:', user);
  };

  const handleDelete = (user: any) => {
    console.log('Deleting user:', user);
  };

  const handleView = (user: any) => {
    console.log('Viewing user:', user);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Usuarios</h1>
      <DataTable
        columns={columns}
        data={mockUsers}
        onRefresh={handleRefresh}
        onDownload={handleDownload}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />
    </div>
  );
};

export default Users;