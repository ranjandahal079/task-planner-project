import React from "react";
import "../styles/DeleteModal.css";

const DeleteModal = ({ isOpen, onConfirm, onCancel }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-background">
      <div className="modal" style={{ backgroundColor: 'white' }}>
        <h3>Are you sure you want to delete this task?</h3>
        <div>
          <button onClick={onConfirm} style={{ backgroundColor: 'Blue', color: 'white' }}>Yes</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
