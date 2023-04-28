import React, { useState } from "react";
import PropTypes from "prop-types";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import { CATEGORIES } from "../data";

function TaskList({ tasks }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskList, setTaskList] = useState(tasks);

  const filteredTasks =
    selectedCategory === "All"
      ? taskList
      : taskList.filter((task) => task.category === selectedCategory);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleDeleteTask = (taskText) => {
    const updatedTasks = taskList.filter((task) => task.text !== taskText);
    setTaskList(updatedTasks);
  };

  const handleTaskFormSubmit = (task) => {
    setTaskList([...taskList, task]);
  };

  return (
    <div className="tasks">
      <div className="category-buttons">
        {["All", ...new Set(tasks.map((task) => task.category))].map(
          (category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          )
        )}
      </div>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      {filteredTasks.map((task) => (
        <Task key={task.text} task={task} onDeleteTask={handleDeleteTask} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TaskList;
