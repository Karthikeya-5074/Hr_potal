import React, { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const initialEmployees = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Developer',
      department: 'Engineering',
      doj: '2022-01-15',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Designer',
      department: 'Product',
      doj: '2021-11-03',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Michael Brown',
      role: 'HR Manager',
      department: 'Human Resources',
      doj: '2019-04-21',
      status: 'Active',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      role: 'Accountant',
      department: 'Finance',
      doj: '2020-07-11',
      status: 'Inactive',
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const setEmployeesList = (list) => {
    setEmployees(list);
  };

  const addEmployee = (employee) => {
    setEmployees((prev) => [
      ...prev,
      {
        ...employee,
        id: prev.length ? Math.max(...prev.map((e) => e.id)) + 1 : 1,
      },
    ]);
  };

  const updateEmployee = (id, updates) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
    );
  };

  const deleteEmployee = (id) => {
    setEmployees((prev) => prev.filter((e) => e.id !== id));
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        setEmployees: setEmployeesList,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}
