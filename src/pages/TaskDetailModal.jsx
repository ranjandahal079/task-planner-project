import React from "react";
import "../styles/TaskDetailModal.css";

const TaskDetailModal = ({ isOpen, task, onClose }) => {
  if (!isOpen || !task) return null;

  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div style={{ backgroundColor: 'white' }}>
          <h2 className="modal-heading">Task Details</h2>
          <div className="modal-content">
            <div className="modal-row">
              <span className="modal-label">Title:</span>
              <span className="modal-value">{task.title}</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">Description:</span>
              <span className="modal-value">{task.description}</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">Priority:</span>
              <span className="modal-value">{task.priority}</span>
            </div>
            <div className="modal-row">
              <span className="modal-label">Due Date:</span>
              <span className="modal-value">{task.dueDate}</span>
            </div>
            <button className="modal-close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailModal;
