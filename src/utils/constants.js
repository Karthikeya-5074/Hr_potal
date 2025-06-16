export const APP_NAME = 'HR Portal';

export const MOCK_USER = {
  name: 'Jane Doe',
  role: 'admin',
};

export const DASHBOARD_STATS = [
  { label: 'Employees', value: 12 },
  { label: 'Active Onboarding', value: 3 },
  { label: 'Pending Documents', value: 5 },
];

export const ONBOARDING_TASKS = [
  { id: 1, label: 'Complete paperwork', completed: false },
  { id: 2, label: 'Setup payroll', completed: true },
  { id: 3, label: 'Sign policies', completed: false },
];

export const INITIAL_EMPLOYEES = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Engineer' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
  { id: 3, name: 'Carol Lee', email: 'carol@example.com', role: 'HR' },
];
