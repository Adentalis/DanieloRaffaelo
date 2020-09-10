import React, { Component } from "react";
import "./styles.css";

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="projects-page">
        <Card
          title="English"
          text="Hier gibt es einen Englisch-Vokabel Trainer, mit meinen eigenen gesammelten Vokabeln über die letzten Jahre hinweg."
          href="/vocabulary"
        />
        <Card
          title="To Do Liste"
          text="Hier geht es zur ToDo Liste, von mir und einigen weiteren Personen. Geladen und gespeichert werden die Daten aus und in Google-Sheets."
          href="/todolist"
        />
        <Card
          title="CSS Tricks"
          text="Hier gibt es eine Liste, unterschiedlichster CSS Tricks, gesammelt aus den weiten des Internets und selber implementiert."
          href="/test"
        />
        <Card
          title="0-100 Bilder"
          text="Hier geht es zu meiner persönlichen Mnemoliste an Bildern/Wörter, zum besseren merken von Zahlen."
          href="/test"
        />
      </div>
    );
  }
}

function Card(props) {
  return (
    <div className="projects-cards">
      <div className="projects-cards__circle">
        <h2>{props.title}</h2>
      </div>
      <div className="projects-cards__content">
        <p>{props.text}</p>
        <a href={props.href}>zum Projekt</a>
      </div>
    </div>
  );
}
