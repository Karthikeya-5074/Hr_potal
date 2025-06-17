import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { EmployeeProvider } from '../../context/EmployeeContext';
import EmployeesPage from '../EmployeesPage';
import * as service from '../../services/employeeService';

jest.mock('../../services/employeeService');

function renderWithProvider(ui) {
  return render(<EmployeeProvider>{ui}</EmployeeProvider>);
}

describe('EmployeesPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('fetches and displays employees on load', async () => {
    service.getEmployees.mockResolvedValue([
      { id: 1, name: 'John', role: 'Dev', department: 'IT', doj: '2023-01-01', status: 'Active' },
    ]);
    renderWithProvider(<EmployeesPage />);
    expect(service.getEmployees).toHaveBeenCalled();
    expect(await screen.findByText('John')).toBeInTheDocument();
  });

  test('shows error toast if fetch fails', async () => {
    service.getEmployees.mockRejectedValue(new Error('network'));
    renderWithProvider(<EmployeesPage />);
    expect(await screen.findByText('network')).toBeInTheDocument();
  });

  test('creates employee and refreshes list', async () => {
    service.getEmployees.mockResolvedValueOnce([]);
    service.createEmployee.mockResolvedValueOnce([
      { id: 1, name: 'Alice', role: 'Dev', department: 'IT', doj: '2023-01-01', status: 'Active' },
    ]);

    renderWithProvider(<EmployeesPage />);

    fireEvent.click(screen.getByText('Add Employee'));
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Alice' } });
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'Dev' } });
    fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'IT' } });
    fireEvent.change(screen.getByLabelText('Date of Joining'), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText('Status'), { target: { value: 'Active' } });

    fireEvent.click(screen.getByText('Save'));

    await waitFor(() => expect(service.createEmployee).toHaveBeenCalled());
    expect(await screen.findByText('Employee added')).toBeInTheDocument();
    expect(await screen.findByText('Alice')).toBeInTheDocument();
  });

  test('submit button disabled while submitting', async () => {
    service.getEmployees.mockResolvedValue([]);
    let resolve;
    service.createEmployee.mockReturnValue(new Promise((res) => { resolve = res; }));

    renderWithProvider(<EmployeesPage />);
    fireEvent.click(screen.getByText('Add Employee'));
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Bob' } });
    fireEvent.change(screen.getByLabelText('Role'), { target: { value: 'Dev' } });
    fireEvent.change(screen.getByLabelText('Department'), { target: { value: 'IT' } });
    fireEvent.change(screen.getByLabelText('Date of Joining'), { target: { value: '2023-01-01' } });
    fireEvent.change(screen.getByLabelText('Status'), { target: { value: 'Active' } });

    const save = screen.getByText('Save');
    fireEvent.click(save);
    expect(save.closest('button')).toBeDisabled();

    resolve([]);
    await waitFor(() => expect(service.createEmployee).toHaveBeenCalled());
  });
});
