import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import Table from "../../c../../components/Table/MaterialTable.js";
const { promisify } = require("util");

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
      sheet: 0,
      promise: 0,
      res: 0,
      promises: 0,
    };
    this.accessSpreadsheet = this.accessSpreadsheet.bind(this);
    this.logState = this.logState.bind(this);
    this.doStuff = this.doStuff.bind(this);
    this.handle = this.handle.bind(this);
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

    var promises = [];
    for (var k in doc._rawSheets) {
      var sheet = doc._rawSheets[k];
      sheet.getRows().then((res) => this.handle(res));
    }
  }

  logState() {
    console.log(this.state);
  }

  doStuff(data) {
    console.log(this.state);
  }

  handle(res) {
    console.log(res.length);
    res.forEach((row) => {
      console.log(row._rawData[0]);
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.accessSpreadsheet}>
          Ich werde english können!
        </Button>
        <Button onClick={this.logState}>State Log</Button>
        <Button onClick={this.doStuff}>doStuff</Button>

        <Table />
      </div>
    );
  }
}
