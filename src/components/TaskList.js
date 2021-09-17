import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, setTasks, filter }) => {
  return (
    <div>
      <ul>
        {filter.map((task) => (
          <Task
            setTasks={setTasks}
            tasks={tasks}
            key={task.id}
            task={task}
            text={task.text}
            id={task.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
