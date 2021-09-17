import React from "react";

const Task = ({ text, task, tasks, setTasks }) => {
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
    <div>
      <li>{text}</li>
      <button onClick={completeHandler}>Completar</button>
      <button onClick={deleteTask}>Borrar</button>
    </div>
  );
};

export default Task;
