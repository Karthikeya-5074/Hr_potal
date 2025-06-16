import React, { useState } from 'react';

function EmployeeForm({ initialData = {}, onSave, onCancel }) {
  const [form, setForm] = useState({
    name: initialData.name || '',
    role: initialData.role || '',
    department: initialData.department || '',
    doj: initialData.doj || '',
    status: initialData.status || 'Active',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block mb-1">Name</label>
        <input
          className="w-full p-2 border rounded"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Role</label>
        <input
          className="w-full p-2 border rounded"
          name="role"
          value={form.role}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Department</label>
        <input
          className="w-full p-2 border rounded"
          name="department"
          value={form.department}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Date of Joining</label>
        <input
          type="date"
          className="w-full p-2 border rounded"
          name="doj"
          value={form.doj}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="block mb-1">Status</label>
        <select
          className="w-full p-2 border rounded"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button type="button" onClick={onCancel} className="px-4 py-2 rounded border">
          Cancel
        </button>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Save
        </button>
      </div>
    </form>
  );
}

export default EmployeeForm;
