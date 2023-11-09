import React from "react";
import CardList from "./CardList";

const TaskList = ({ todos, comp, del }) => {
  return (
    <div>
      {todos.map((el) => (
        <CardList todo={el} comp={comp} del={del} key={el.id} />
      ))}
      ,
    </div>
  );
};

export default TaskList;
