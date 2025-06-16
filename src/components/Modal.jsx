import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      />
      <div className="bg-white rounded shadow-lg z-40 p-6 w-full max-w-lg transform transition-all">
        {children}
      </div>
    </div>
  );
}

export default Modal;
