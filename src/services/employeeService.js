const API_BASE = 'http://172.18.4.178:8000';

export async function getEmployees() {
  const res = await fetch(`${API_BASE}/employees`);
  if (!res.ok) {
    throw new Error('Failed to fetch employees');
  }
  return res.json();
}

export async function createEmployee(data) {
  const res = await fetch(`${API_BASE}/employees`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error('Failed to create employee');
  }
  await res.text();
  return getEmployees();
}
