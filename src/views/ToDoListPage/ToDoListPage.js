import React, { Component } from "react";
import ToDoList from "./ToDoList";

export default class ToDoListPage extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], text: "" };
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.markItemCompleted = this.markItemCompleted.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleAddItem(event) {
    //event.preventDefault();

    let newItem = {
      id: this.state.items.length,
      date: new Date().toLocaleDateString(),
      text: this.state.text,
      finished: false,
    };

    this.setState((prevState) => ({
      items: prevState.items.concat(newItem),
      text: "",
    }));
  }

  markItemCompleted(itemId) {
    debugger;

    var updatedItems = this.state.items.map((item) => {
      if (itemId === item.id) item.finished = !item.finished;

      return item;
    });

    // State Updates are Merged
    this.setState({
      items: [].concat(updatedItems),
    });
  }
  handleDeleteItem(itemId) {
    var updatedItems = this.state.items.filter((item) => {
      return item.id !== itemId;
    });

    this.setState({
      items: [].concat(updatedItems),
    });
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
        items "--> {this.state.items.length}
        <br />
       
      </div>
    );
  }
}
