import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

function App() {
  const [inputText, setInputText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    getLocalTasks();
  }, []);

  useEffect(() => {
    saveTask();
    filerHandler();
  }, [tasks, status]);

  const filerHandler = () => {
    switch (status) {
      case "completed":
        setFilter(tasks.filter((task) => task.completed === true));
        break;
      case "uncompleted":
        setFilter(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilter(tasks);
        break;
    }
  };

  const saveTask = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const getLocalTasks = () => {
    if (localStorage.getItem("tasks") === null) {
      localStorage.setItem("tasks", JSON.stringify([]));
    } else {
      let taskLocal = JSON.parse(localStorage.getItem("tasks"));
      setTasks(taskLocal);
    }
  };

  return (
    <div className="App">
      <header>Tasker</header>
      <Form
        tasks={tasks}
        setTasks={setTasks}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TaskList filter={filter} setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
