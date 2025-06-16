import React, { useEffect } from 'react';

function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3000);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 right-4 px-4 py-2 rounded text-white shadow-lg transition-opacity ${
        type === 'error' ? 'bg-red-500' : 'bg-green-600'
      }`}
    >
      {message}
    </div>
  );
}

export default Toast;
