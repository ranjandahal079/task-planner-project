import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import ConfirmationModal from "../components/ConfirmationModal";

import "../styles/AddEditPage.css";

const AddEditPage = () => {
  const history = useHistory();
  const { taskId } = useParams(); // Get the taskId from URL parameter
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({ title: "", description: "", priority: "", dueDate: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deletingTaskId, setDeletingTaskId] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    // Check if taskId is provided in the URL
    if (taskId) {
      // If taskId is provided, it means we're editing an existing task
      const taskToEdit = savedTasks.find((task) => task.id === parseInt(taskId));
      if (taskToEdit) {
        setTask(taskToEdit);
        setIsEditing(true);
      } else {
        // Handle case where task with provided taskId is not found
        history.push("/home"); // Redirect to HomePage if task with provided taskId is not found
      }
    }
  }, [taskId]); // Update effect when taskId changes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedTasks = tasks.map((t) =>
        t.id === parseInt(taskId) ? { ...t, ...task } : t
      );
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setIsEditing(false);
    } else {
      const newTask = { ...task, id: Date.now() };
      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }
    history.push("/home"); // Redirect to HomePage after saving or updating task
  };

  const handleDeleteTask = () => {
    setIsModalOpen(true);
  };

  const confirmDeleteTask = () => {
    const updatedTasks = tasks.filter((t) => t.id !== parseInt(taskId));
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsModalOpen(false);
    history.push("/home"); // Redirect to HomePage after deleting task
  };

  const cancelDeleteTask = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="add-edit-container">
      <h1>{isEditing ? "Edit Task" : "Add Task"}</h1>
      <Link to="/home">
        <button className="back-button">Back to Task List</button>
      </Link>
      <form className="add-edit-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={task.priority}
            onChange={handleInputChange}
          >
            <option value="Highest">Highest</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div>
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">{isEditing ? "Update Task" : "Save Task"}</button>
          {isEditing && (
            <button type="button" onClick={handleDeleteTask}>Delete Task</button>
          )}
        </div>
      </form>
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={confirmDeleteTask}
        onCancel={cancelDeleteTask}
      />
    </div>
  );
};

export default AddEditPage;
