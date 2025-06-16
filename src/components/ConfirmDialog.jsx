import React from 'react';
import Modal from './Modal';

function ConfirmDialog({ isOpen, onClose, onConfirm, message }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="space-y-4">
        <p>{message}</p>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Confirm
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
