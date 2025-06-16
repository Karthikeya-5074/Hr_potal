import React, { createContext, useState, useContext } from 'react';

const EmployeeContext = createContext(null);

export function EmployeeProvider({ children }) {
  const initialEmployees = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
  }));

  const [employees, setEmployees] = useState(initialEmployees);

  const addEmployee = (name) => {
    setEmployees((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        name: name || `Employee ${prev.length + 1}`,
      },
    ]);
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
}

export function useEmployees() {
  return useContext(EmployeeContext);
}
