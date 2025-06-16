import React, { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState([]);

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
