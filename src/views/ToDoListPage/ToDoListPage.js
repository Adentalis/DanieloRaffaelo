import React, { Component } from "react";
import ToDoList from "./ToDo/ToDoList";
import Tabs from "./Tab/Tabs";

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("../VocabularyPage/client_secret.json");
const doc = new GoogleSpreadsheet(
  "1svIOCExO3fe847LUexm7lWaADh_DjpZ3pXhu8oL4Tik"
);

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

  //GOOGLE THINGS
  async accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    const info = await doc.loadInfo(); // loads document properties and worksheets
    var sheet = info._rawSheets[0];
    sheet.getRows().then((res) => this.resolveSheets(res));
  }

  resolveSheets(res) {
    var data = [];
    res.forEach((row) => {
      data.push({ de: row._rawData[1], en: row._rawData[0] });
    });
    var words = this.state.words;
    words = words.concat(data);
    this.setState({ words });
  }

  render() {
    return (
      <div>
        <h1>Es gibt viel zu tun Mylord</h1>
        <Tabs>
          <div label="Langer">
            {this.sectionDaniel()}
            {this.sectionDanielTests()}
          </div>
          <div label="Kleines">
            GGM for <em>President</em>
          </div>
          <div label="Mittel">Bald werden wir die Welt erobern</div>
        </Tabs>
      </div>
    );
  }

  sectionDaniel() {
    return (
      <div>
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
      </div>
    );
  }

  sectionDanielTests() {
    return (
      <div>
        <br />
        ----------TESTS---------------
        <br />
        items "--> {this.state.items.length}
        <br />
        <button onClick={this.accessSpreadsheet}>Data</button>
      </div>
    );
  }
}
