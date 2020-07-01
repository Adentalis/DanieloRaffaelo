import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Table from "../../c../../components/Table/MaterialTable.js";
import cTable from "../../c../../components/Table/cMaterialTable.js";


const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./client_secret.json");
const doc = new GoogleSpreadsheet(
  "1IcwMfyNgp2ZdvEbSQPqsXGo2JZG6BbF3dI8xVKdNlgY"
);

export default class VocabularyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doc: 0,
      words: [],
      endText: "WEG MIT DIR!!",
    };
    this.accessSpreadsheet = this.accessSpreadsheet.bind(this);
    this.doStuff = this.doStuff.bind(this);
    this.resolveSheets = this.resolveSheets.bind(this);
    this.updateTable = this.updateTable.bind(this);
  }

  async accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(
      "there are " + doc.sheetCount + " sheets in this document " + doc.title
    );
    this.setState({ doc });
    this.setState({ endText: " aa" });

    for (var k in doc._rawSheets) {
      var sheet = doc._rawSheets[k];
      sheet.getRows().then((res) => this.resolveSheets(res));
    }
  }

  doStuff(data) {
    console.log(this.state);
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

  updateTable() {
    this.setState({ endText: " aa" });
  }

  render() {
    return (
      <div>
        <Button onClick={this.accessSpreadsheet}>
          Ich werde english können!
        </Button>
        <Button onClick={this.updateTable}>Magie :)</Button>
        <Button onClick={this.doStuff}>doStuff</Button>
        <Table />
        <Button>{this.state.endText}</Button>
        <cTable></cTable>
      </div>
    );
  }
}
