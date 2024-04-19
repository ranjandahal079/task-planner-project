import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import DeleteModal from "./DeleteModal";
import TaskDetailModal from "./TaskDetailModal";

import "../styles/HomePage.css";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingTaskId, setDeletingTaskId] = useState(null);
  const [filterBy, setFilterBy] = useState(""); // Initialize with empty string
  const [selectedTask, setSelectedTask] = useState(null);
  const [isPriorityHovered, setIsPriorityHovered] = useState(false); // Track whether the Priority option is hovered
  const [selectedPriority, setSelectedPriority] = useState(""); // State to store selected priority
  const history = useHistory();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleDeleteTask = (taskId) => {
    setIsDeleteModalOpen(true);
    setDeletingTaskId(taskId);
  };

  const handleEditTask = (taskId) => {
    history.push(`/edit-task/${taskId}`);
  };

  const confirmDeleteTask = () => {
    const updatedTasks = tasks.filter((task) => task.id !== deletingTaskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setIsDeleteModalOpen(false);
  };

  const cancelDeleteTask = () => {
    setIsDeleteModalOpen(false);
    setDeletingTaskId(null);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const daysFromToday = (dueDate) => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.round((due - today) / oneDay);
    return diffDays;
  };

  const daysToDisplay = (dueDate) => {
    const diffDays = daysFromToday(dueDate);
    if (diffDays < 0) {
      return `${Math.abs(diffDays)} days ago`;
    } else {
      return `${diffDays} days left`;
    }
  };

  const filterTasks = () => {
    // Apply selected filter to tasks array
    switch (filterBy) {
      case "priority":
        return tasks.filter((task) => task.priority.toLowerCase() === selectedPriority.toLowerCase());
      case "deadline":
        return tasks.sort((a, b) => {
          const diffA = daysFromToday(a.dueDate);
          const diffB = daysFromToday(b.dueDate);
          return diffA - diffB;
        });
      case "unfinished":
        return tasks.filter((task) => !task.completed);
      case "newest":
        return tasks.slice().reverse(); // Create a copy of tasks and reverse it
      default:
        return tasks;
    }
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
    // Reset the Priority hover state when a new filter is selected
    setIsPriorityHovered(false);
    setSelectedPriority(""); // Reset selectedPriority when changing filter
  };

  const handlePriorityFilter = (priority) => {
    setSelectedPriority(priority);
    setFilterBy("priority");
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleCloseModal = () => {
    setSelectedTask(null);
  };

  return (
    <div className="home-container">
      <h1 className="home-heading">Task Manager</h1>
      <div className="filter-create-container">
        <div className="filter-container">
          <label htmlFor="filterBy">Filter By:</label>
          <select
            id="filterBy"
            className="filter-dropdown"
            value={filterBy}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            <option value="priority">Priority</option>
            <option value="deadline">Deadline</option>
            <option value="unfinished">Unfinished</option>
            <option value="newest">Newest</option>
          </select>
          {/* Priority Options */}
          {filterBy === "priority" && (
            <div className="priority-options">
              <button onClick={() => handlePriorityFilter("High")}>High</button>
              <button onClick={() => handlePriorityFilter("Medium")}>Medium</button>
              <button onClick={() => handlePriorityFilter("Low")}>Low</button>
            </div>
          )}
        </div>
        <div className="create-task-container">
          <Link to="/add-task">
            <button className="create-task-button">+ Create New Task</button>
          </Link>
        </div>
      </div>
      <div className="task-manager-container">
        <h2 className="task-list-heading">Task List</h2>
        <div className="task-list-container">
          {filterTasks().map((task, index) => (
           <div className={`task-item ${task.completed ? "completed" : ""}`} key={task.id}>
           <div className="task-checkbox">
             <input
               type="checkbox"
               checked={task.completed}
               onChange={() => toggleTaskCompletion(task.id)}
               onClick={(e) => e.stopPropagation()}
             />
           </div>
           <div className="task-content">
             <h3 className={`task-title ${task.completed ? 'completed' : ''}`} onClick={() => handleTaskClick(task)}>
               {task.title}
             </h3>
             <p>{daysToDisplay(task.dueDate)}</p>
             {/* Separate div for priority */}
             <div className="task-priority">
               <p>Priority: {task.priority}</p>
             </div>
           </div>
           <div className="task-actions">
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 handleEditTask(task.id);
               }}
               disabled={task.completed}
             >
               Edit
             </button>
             <button
               onClick={(e) => {
                 e.stopPropagation();
                 handleDeleteTask(task.id);
               }}
               disabled={task.completed}
             >
               Delete
             </button>
           </div>
         </div>
          ))}
        </div>
      </div>
      {isDeleteModalOpen && (
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onConfirm={confirmDeleteTask}
          onCancel={cancelDeleteTask}
        />
      )}
      <TaskDetailModal
        isOpen={!!selectedTask}
        task={selectedTask}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default HomePage;
