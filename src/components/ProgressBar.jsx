import React from 'react';

function ProgressBar({ value, max = 100 }) {
  const percent = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full bg-gray-200 rounded h-4 overflow-hidden">
      <div
        className="h-full bg-blue-600 transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}

export default ProgressBar;
