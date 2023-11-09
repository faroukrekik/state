import React from "react";

const CardList = ({ todo, comp, del }) => {
  return (
    <div>
      <h1 id={todo.isDone ? "completed" : "uncompleted"}>{todo.task}</h1>
      <button onClick={() => comp(todo.id)}>
        {todo.isDone ? "Undo" : "Completed"}
      </button>
      <button onClick={() => del(todo.id)}>Delete</button>
    </div>
  );
};

export default CardList;
