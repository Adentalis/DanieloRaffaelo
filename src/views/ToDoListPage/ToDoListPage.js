import React, { Component } from "react";
import ToDoList from "./ToDoList";

export default class ToDoListPage extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleAddItem(event) {
    //event.preventDefault();

    let newItem = {
      date: new Date().toLocaleDateString(),
      text: this.state.text,
      finished: false,
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
    }));
  }

  render() {
    return (
      <div>
        Es gibt viel zu tun Mylord
        <br />
        Der lange
        <br />
        <ToDoList
          items={this.state.items}
          onItemCompleted={this.markItemCompleted}
          onDeleteItem={this.handleDeleteItem}
        />
        <br />
        <input
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
        />
        <button onClick={this.handleAddItem} disabled={!this.state.text}>
          Jeeey
        </button>
        <br />
        ----------TESTS---------------
        <br />
        items --> {this.state.items.length}
      </div>
    );
  }
}
