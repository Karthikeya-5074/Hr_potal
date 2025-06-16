import React, { useState } from 'react';
import ChecklistItem from '../components/ChecklistItem';
import ProgressBar from '../components/ProgressBar';
import Toast from '../components/Toast';

function OnboardingPage() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    emergencyContact: '',
    bankAccount: '',
  });
  const [profileComplete, setProfileComplete] = useState(false);
  const [docs, setDocs] = useState([
    { id: 1, label: 'ID Proof', status: 'Pending' },
    { id: 2, label: 'Address Proof', status: 'Pending' },
  ]);
  const [tasks, setTasks] = useState([
    { id: 1, label: 'Read company policies', completed: false },
    { id: 2, label: 'Finish orientation quiz', completed: false },
  ]);
  const [toast, setToast] = useState(null);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((p) => ({ ...p, [name]: value }));
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    const missing = Object.values(profile).some((v) => !v.trim());
    if (missing) {
      setToast({ type: 'error', message: 'Please fill all fields' });
      return;
    }
    setProfileComplete(true);
    setToast({ type: 'success', message: 'Profile saved' });
  };

  const handleDocUpload = (id) => {
    setDocs((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: 'Uploaded' } : d))
    );
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const totalSteps = 1 + 1 + docs.length + tasks.length; // welcome + profile + docs + tasks
  const completedSteps =
    1 +
    (profileComplete ? 1 : 0) +
    docs.filter((d) => d.status === 'Uploaded').length +
    tasks.filter((t) => t.completed).length;

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Onboarding</h1>

      {/* Progress */}
      <div>
        <ProgressBar value={completedSteps} max={totalSteps} />
        <p className="text-sm text-gray-600 mt-1">
          {completedSteps} of {totalSteps} steps completed
        </p>
      </div>

      {/* Welcome Section */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Welcome to the team!</h2>
        <p>
          We are excited to have you on board. Please follow the steps below to
          complete your onboarding.
        </p>
        <div className="w-full aspect-video bg-gray-200 flex items-center justify-center rounded">
          <span className="text-gray-500">Intro Video</span>
        </div>
      </section>

      {/* Profile Form */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Your Profile</h2>
        {profileComplete ? (
          <p className="text-green-600">Profile information completed.</p>
        ) : (
          <form onSubmit={handleProfileSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Full Name</label>
              <input
                className="w-full p-2 border rounded"
                name="fullName"
                value={profile.fullName}
                onChange={handleProfileChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input
                className="w-full p-2 border rounded"
                name="email"
                value={profile.email}
                onChange={handleProfileChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Phone</label>
              <input
                className="w-full p-2 border rounded"
                name="phone"
                value={profile.phone}
                onChange={handleProfileChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1">Emergency Contact</label>
              <input
                className="w-full p-2 border rounded"
                name="emergencyContact"
                value={profile.emergencyContact}
                onChange={handleProfileChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-1">Bank Account</label>
              <input
                className="w-full p-2 border rounded"
                name="bankAccount"
                value={profile.bankAccount}
                onChange={handleProfileChange}
                required
              />
            </div>
            <div className="sm:col-span-2 flex justify-end space-x-2">
              <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
                Save Profile
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Document Upload */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Documents</h2>
        <div className="bg-white rounded shadow divide-y">
          {docs.map((doc) => (
            <div key={doc.id} className="flex items-center justify-between p-2">
              <span>{doc.label}</span>
              <div className="space-x-2">
                <span
                  className={
                    doc.status === 'Uploaded' ? 'text-green-600' : 'text-yellow-600'
                  }
                >
                  {doc.status}
                </span>
                {doc.status !== 'Uploaded' && (
                  <button
                    onClick={() => handleDocUpload(doc.id)}
                    className="px-2 py-1 text-sm bg-blue-600 text-white rounded"
                  >
                    Upload
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tasks */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Tasks</h2>
        <div className="bg-white rounded shadow divide-y">
          {tasks.map((task, idx) => (
            <ChecklistItem
              key={task.id}
              label={task.label}
              completed={task.completed}
              disabled={idx > 0 && !tasks[idx - 1].completed}
              onToggle={() => handleToggleTask(task.id)}
            />
          ))}
        </div>
      </section>

      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </div>
  );
}

export default OnboardingPage;
