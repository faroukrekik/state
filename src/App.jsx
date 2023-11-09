import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";

export default class App extends Component {
  state = {
    todos: [
      { id: Math.random(), task: "Learn HTML and CSS", isDone: true },
      { id: Math.random(), task: "Learn Javascript", isDone: true },
      { id: Math.random(), task: "Learn Redux", isDone: false },
      { id: Math.random(), task: "Learn State", isDone: true },
    ],
  };
  handleComplete = (TaskID) => {
    this.setState({
      todos: this.state.todos.map((el) =>
        el.id === TaskID ? { ...el, isDone: !el.isDone } : el
      ),
    });
  };
  handleDelete = (TaskID) => {
    this.setState({ todos: this.state.todos.filter((el) => el.id !== TaskID) });
  };

  handleAdd = (newText) => {
    const newTask = {
      id: Math.random(),
      task: newText,
      isDone: false,
    };
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  render() {
    return (
      <div className="App">
        <AddTask add={this.handleAdd} />
        <TaskList
          todos={this.state.todos}
          comp={this.handleComplete}
          del={this.handleDelete}
        />
      </div>
    );
  }
}
