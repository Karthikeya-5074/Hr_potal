import React from 'react';

function EmployeesTable({ employees, onEdit, onDelete }) {
  if (!employees.length) {
    return (
      <p className="text-center text-gray-500 py-4">No employees found.</p>
    );
  }

  return (
    <div className="overflow-x-auto max-w-screen-lg">
      <table className="table-auto w-full border text-left text-sm shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border-b">Name</th>
            <th className="p-2 border-b">Role</th>
            <th className="p-2 border-b">Department</th>
            <th className="p-2 border-b whitespace-nowrap">Date of Joining</th>
            <th className="p-2 border-b">Status</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.emp_id} className="even:bg-gray-50">
              <td className="p-2">{emp.name}</td>
              <td className="p-2">{emp.role}</td>
              <td className="p-2">{emp.department}</td>
              <td className="p-2 whitespace-nowrap">{emp.doj}</td>
              <td className="p-2">{emp.status}</td>
              <td className="p-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => onEdit(emp)}
                    className="px-4 py-2 rounded text-white text-sm bg-blue-500 hover:bg-blue-600 transition-all"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(emp)}
                    className="px-4 py-2 rounded text-white text-sm bg-red-500 hover:bg-red-600 transition-all"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeesTable;
