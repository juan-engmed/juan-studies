import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <div>
          <label htmlFor="task">Adicionar nova Task</label>
          <input
            type="text"
            name="task"
            id="task"
            placeholder="O que estudar?"
            required
          ></input>
        </div>
        <div>
          <label htmlFor="time"></label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00"
            max="02:00:00"
            required
          ></input>
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
