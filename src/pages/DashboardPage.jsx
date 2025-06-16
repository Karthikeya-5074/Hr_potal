import React, { useState } from 'react';
import StatsCard from '../components/StatsCard';
import ChecklistItem from '../components/ChecklistItem';
import { DASHBOARD_STATS, ONBOARDING_TASKS } from '../utils/constants';
import { useEmployees } from '../context/EmployeeContext';

function DashboardPage() {
  const [tasks, setTasks] = useState(ONBOARDING_TASKS);
  const { employees } = useEmployees();

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[{ label: 'Employees', value: employees.length }, ...DASHBOARD_STATS].map(
          (stat) => (
            <StatsCard key={stat.label} label={stat.label} value={stat.value} />
          )
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Onboarding Checklist</h2>
        <div className="bg-white rounded shadow divide-y">
          {tasks.map((task, idx) => (
            <ChecklistItem
              key={task.id}
              label={task.label}
              completed={task.completed}
              disabled={idx > 0 && !tasks[idx - 1].completed}
              onToggle={() => handleToggle(task.id)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default DashboardPage;
