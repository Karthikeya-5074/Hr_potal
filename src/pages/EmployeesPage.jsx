import React, { useState } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import EmployeesTable from '../components/EmployeesTable';
import { INITIAL_EMPLOYEES } from '../utils/constants';

function EmployeesPage() {
  const [employees, setEmployees] = useState(INITIAL_EMPLOYEES);
  const [editing, setEditing] = useState(null);

  const handleSave = (employee) => {
    if (employee.id) {
      setEmployees((prev) => prev.map((e) => (e.id === employee.id ? employee : e)));
    } else {
      const newEmployee = { ...employee, id: Date.now() };
      setEmployees((prev) => [...prev, newEmployee]);
    }
    setEditing(null);
  };

  const handleDelete = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  const handleEdit = (emp) => {
    setEditing(emp);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Employees</h1>
      <EmployeeForm onSave={handleSave} onCancel={() => setEditing(null)} existing={editing} />
      <EmployeesTable employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default EmployeesPage;
