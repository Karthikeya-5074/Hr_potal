import React from 'react';

function ChecklistItem({ label, completed, disabled, onToggle }) {
  return (
    <div className="flex items-center space-x-2 p-2 border-b">
      <input
        type="checkbox"
        checked={completed}
        disabled={disabled}
        onChange={onToggle}
      />
      <span className={disabled ? 'text-gray-400' : ''}>{label}</span>
    </div>
  );
}

export default ChecklistItem;
