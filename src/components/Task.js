import React from "react";
import "./task.css";
const Task = ({ text, description, task, tasks, setTasks }) => {
  const deleteTask = () => {
    setTasks(tasks.filter((el) => el.id !== task.id));
  };
  const completeHandler = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="main-task-card">
      <label> Título de la tarea:</label>
      <p> {text}</p>
      <label> Descripción</label>
      <p>{description}</p>
      <button onClick={completeHandler}>Completar</button>
      <button onClick={deleteTask}>Borrar</button>
    </div>
  );
};

export default Task;
