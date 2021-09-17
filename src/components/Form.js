import React from "react";
import "./form.css";

const Form = ({
  inputText,
  descriptionText,
  setDescriptionText,
  setInputText,
  tasks,
  setTasks,
  setStatus,
}) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    setDescriptionText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //Crea objeto para guardar
    setTasks([
      ...tasks,
      {
        text: inputText,

        completed: false,
        id: Math.random() * 13,
      },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form className="form-container">
      <input
        className="input"
        name="title"
        placeholder="titulo de la tarea"
        value={inputText}
        onChange={inputTextHandler}
        type="text"
      />

      <button onClick={submitHandler} type="submit">
        Añadir
      </button>
      <div>
        <select className="input" onChange={statusHandler} name="tasks">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
