import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.trim()) {
            return;
          }

          dispatch(addTodo(input));
          setInput("");
        }}
      >
        {input}
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
