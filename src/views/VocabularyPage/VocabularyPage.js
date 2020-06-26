import React, { Component } from "react";

import Button from "@material-ui/core/Button";
import AdvancedList from "../../components/List/AdvancedList.js";

const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require("./client_secret.json");
const doc = new GoogleSpreadsheet(
  "1IcwMfyNgp2ZdvEbSQPqsXGo2JZG6BbF3dI8xVKdNlgY"
);

const mockData = [];
mockData.push({
  email: "hans22@ff",
  gender: "fff",
  first_name: "fd",
  last_name: " gg",
});
mockData.push({
  email: "hans22@ff",
  gender: "fff",
  first_name: "fd",
  last_name: " gg",
});
mockData.push({
  email: "hans22@ff",
  gender: "fff",
  first_name: "fd",
  last_name: " gg",
});
mockData.push({
  email: "hans22@ff",
  gender: "fff",
  first_name: "fd",
  last_name: " gg",
});
mockData.push({
  email: "hans22@ff",
  gender: "fff",
  first_name: "fd",
  last_name: " gg",
});

export default class VocabularyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet: 0,
    };
    this.accessSpreadsheet = this.accessSpreadsheet.bind(this);
    this.logState = this.logState.bind(this);
  }

  async accessSpreadsheet() {
    await doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });

    await doc.loadInfo(); // loads document properties and worksheets
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id]
    console.log(sheet.title);
  }

  logState() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Button onClick={this.accessSpreadsheet}>
          Ich werde english können!
        </Button>
        <Button onClick={this.logState}>State</Button>
        <AdvancedList />,
      </div>
    );
  }
}
