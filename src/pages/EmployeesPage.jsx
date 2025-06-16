import React, { useState } from 'react';
import { useEmployees } from '../context/EmployeeContext';
import Modal from '../components/Modal';
import EmployeeForm from '../components/EmployeeForm';
import ConfirmDialog from '../components/ConfirmDialog';
import Toast from '../components/Toast';

function EmployeesPage() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [toast, setToast] = useState(null);

  const filtered = employees.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleEdit = (emp) => {
    setEditing(emp);
    setShowForm(true);
  };

  const handleSave = (data) => {
    if (editing) {
      updateEmployee(editing.id, data);
      setToast({ type: 'success', message: 'Employee updated' });
    } else {
      addEmployee(data);
      setToast({ type: 'success', message: 'Employee added' });
    }
    setShowForm(false);
  };

  const handleDelete = () => {
    deleteEmployee(toDelete.id);
    setToast({ type: 'success', message: 'Employee deleted' });
    setToDelete(null);
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Employees</h1>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full sm:w-60"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add Employee
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
              <th className="p-2">Department</th>
              <th className="p-2">DOJ</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((emp) => (
              <tr key={emp.id} className="border-t">
                <td className="p-2">{emp.name}</td>
                <td className="p-2">{emp.role}</td>
                <td className="p-2">{emp.department}</td>
                <td className="p-2 whitespace-nowrap">{emp.doj}</td>
                <td className="p-2">{emp.status}</td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(emp)}
                    className="px-2 py-1 text-sm bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => setToDelete(emp)}
                    className="px-2 py-1 text-sm bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <EmployeeForm
          initialData={editing || {}}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
        />
      </Modal>

      <ConfirmDialog
        isOpen={Boolean(toDelete)}
        onClose={() => setToDelete(null)}
        onConfirm={handleDelete}
        message={`Delete ${toDelete?.name}?`}
      />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default EmployeesPage;
