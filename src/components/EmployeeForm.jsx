import React, { useEffect, useState } from 'react';

function EmployeeForm({ onSave, onCancel, existing }) {
  const [form, setForm] = useState({ name: '', email: '', role: '' });

  useEffect(() => {
    if (existing) {
      setForm({ name: existing.name, email: existing.email, role: existing.role });
    }
  }, [existing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.role) return;
    onSave({ ...existing, ...form });
    setForm({ name: '', email: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-4">
      <div className="flex space-x-2">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="flex-1 border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="flex-1 border p-2 rounded"
        />
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
          placeholder="Role"
          className="flex-1 border p-2 rounded"
        />
      </div>
      <div className="space-x-2">
        <button type="submit" className="bg-blue-600 text-white px-3 py-1 rounded">
          {existing ? 'Update' : 'Add'}
        </button>
        {existing && (
          <button
            type="button"
            className="border px-3 py-1 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;
