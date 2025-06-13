import React from 'react';

function EmployeesTable({ employees, onEdit, onDelete }) {
  if (employees.length === 0) {
    return <div className="text-gray-600">No employees found.</div>;
  }

  return (
    <table className="min-w-full divide-y divide-gray-200 bg-white shadow">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Name</th>
          <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Email</th>
          <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Role</th>
          <th className="px-3 py-2" />
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {employees.map((emp) => (
          <tr key={emp.id} className="hover:bg-gray-50">
            <td className="px-3 py-2 whitespace-nowrap">{emp.name}</td>
            <td className="px-3 py-2 whitespace-nowrap">{emp.email}</td>
            <td className="px-3 py-2 whitespace-nowrap">{emp.role}</td>
            <td className="px-3 py-2 whitespace-nowrap text-right space-x-2">
              <button
                onClick={() => onEdit(emp)}
                className="text-blue-600 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(emp.id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeesTable;
