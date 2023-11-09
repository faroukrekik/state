import React, { Component } from "react";

export default class AddTask extends Component {
  state = {
    newText: "",
  };
  handleChange = (e) => {
    this.setState({ newText: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.state.newText.trim() === ""
      ? alert("this field shouldn't be empty ")
      : this.props.add(this.state.newText);
  };
  render() {
    return (
      <div>
        <form action="" onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.newText}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
