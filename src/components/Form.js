import React from "react";

const Form = ({ inputText, setInputText, tasks, setTasks, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //Crea objeto para guardar
    setTasks([
      ...tasks,
      { text: inputText, completed: false, id: Math.random() * 13 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button onClick={submitHandler} type="submit">
        Add
      </button>
      <div>
        <select onChange={statusHandler} name="tasks">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
