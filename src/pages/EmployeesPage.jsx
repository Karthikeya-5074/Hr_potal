import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useEmployees } from '../context/EmployeeContext';
import Modal from '../components/Modal';
import EmployeeForm from '../components/EmployeeForm';
import ConfirmDialog from '../components/ConfirmDialog';
import Toast from '../components/Toast';
import EmployeesTable from '../components/EmployeesTable';
import { getEmployees, createEmployee } from '../services/employeeService';

function EmployeesPage() {
  const {
    employees,
    updateEmployee,
    deleteEmployee,
    setEmployees,
  } = useEmployees();
  const [search, setSearch] = useState('');
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [toDelete, setToDelete] = useState(null);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const list = await getEmployees();
        setEmployees(list);
      } catch (err) {
        setToast({
          type: 'error',
          message: err.message || 'Failed to fetch employees',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const filtered = useMemo(
    () =>
      employees.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      ),
    [employees, search]
  );

  const handleAdd = useCallback(() => {
    setEditing(null);
    setShowForm(true);
  }, []);

  const handleEdit = useCallback((emp) => {
    setEditing(emp);
    setShowForm(true);
  }, []);

  const handleSave = useCallback(
    async (data) => {
      if (editing) {
        updateEmployee(editing.id, data);
        setToast({ type: 'success', message: 'Employee updated' });
        setShowForm(false);
        return;
      }

      setIsSubmitting(true);
      try {
        const list = await createEmployee(data);
        setEmployees(list);

        setToast({ type: 'success', message: 'Employee added' });
        setShowForm(false);
      } catch (err) {
        setToast({ type: 'error', message: err.message || 'Error adding employee' });
      } finally {
        setIsSubmitting(false);
      }
    },
    [editing, updateEmployee, setEmployees]
  );

  const handleDelete = () => {
    deleteEmployee(toDelete);
    setToast({ type: 'success', message: 'Employee deleted' });
    setToDelete(null);
  }, [deleteEmployee, toDelete]);

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
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-white shadow-md w-full sm:w-auto text-center"
        >
          Add Employee
        </button>
      </div>
      {loading ? (
        <div className="flex justify-center py-8">
          <div className="h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <EmployeesTable
          employees={filtered}
          onEdit={handleEdit}
          onDelete={setToDelete}
        />
      )}

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <EmployeeForm
          initialData={editing || {}}
          onSave={handleSave}
          onCancel={() => setShowForm(false)}
          isSubmitting={isSubmitting}
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
