import React from 'react';

function ChecklistItem({ label, completed }) {
  return (
    <div className="flex items-center space-x-2 p-2 border-b">
      <input type="checkbox" checked={completed} readOnly />
      <span>{label}</span>
    </div>
  );
}

export default ChecklistItem;
