import React, { Component } from "react";
import "./styles.css";
import ProjectCard from "./ProjectCard";

export default class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log("dd");
  }

  render() {
    return (
      <div className="projects-page">
        <ProjectCard
          title="English"
          text="Hier gibt es einen Englisch-Vokabel Trainer, mit meinen eigenen gesammelten Vokabeln über die letzten Jahre hinweg."
          href="/vocabulary"
        />
        <ProjectCard
          title="To Do Liste"
          text="Hier geht es zur ToDo Liste, von mir und einigen weiteren Personen. Geladen und gespeichert werden die Daten aus und in Google-Sheets."
          href="/todolist"
        />
        <ProjectCard
          title="CSS Tricks"
          text="Hier gibt es eine Liste, unterschiedlichster CSS Tricks, gesammelt aus den weiten des Internets und selber implementiert."
          href="/test"
        />
        <ProjectCard
          title="0-100 Bilder"
          text="Hier geht es zu meiner persönlichen Mnemoliste an Bildern/Wörter, zum besseren merken von Zahlen."
          href="/mnemo"
        />
        <ProjectCard
          title="Nostale"
          text="Hier wird versucht einen Market-Tracker zu starten, welcher stündlich die Preise aus dem Markt abspeichert und anzeigt."
          href="/nostale"
        />
      </div>
    );
  }
}
