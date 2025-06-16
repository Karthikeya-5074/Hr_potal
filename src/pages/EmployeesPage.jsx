import React from 'react';
import { useEmployees } from '../context/EmployeeContext';

function EmployeesPage() {
  const { employees, addEmployee } = useEmployees();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Employees</h1>
      <button
        onClick={() => addEmployee()}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add Employee
      </button>
      <ul className="space-y-1">
        {employees.map((emp) => (
          <li key={emp.id} className="bg-white p-2 rounded shadow">
            {emp.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeesPage;
