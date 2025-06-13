import React from 'react';

function StatsCard({ label, value }) {
  return (
    <div className="bg-white rounded shadow p-4 text-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );
}

export default StatsCard;
