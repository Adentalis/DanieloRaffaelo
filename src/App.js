import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import VocabularyPage from "./views/VocabularyPage/VocabularyPage.js";
import MetamaskPage from "./views/ToDoListPage/ToDoListPage.js";
import TestPage from "./views/TestPage/TestPage.js";
import GridPage from "./views/GridPage/GridPage.js";
import ProjectPage from "./views/ProjectPage/ProjectPage.js";
import MnemoPage from "./views/MnemoPage/MnemoPage.js";
import NostalePage from "./views/NostalePage/NostalePage.js";

import Header from "./components/Header/Header.js";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/vocabulary" exact>
            <VocabularyPage />
          </Route>
          <Route path="/projects" exact>
            <ProjectPage />
          </Route>
          <Route path="/todolist" exact>
            <MetamaskPage />
          </Route>
          <Route path="/grid" exact>
            <GridPage />
          </Route>
          <Route path="/mnemo" exact>
            <MnemoPage />
          </Route>
          <Route path="/nostale" exact>
            <NostalePage />
          </Route>
          <Route path="/test" exact>
            <TestPage defaultSessionLength="5" />
          </Route>
        </Switch>
      </div>
    );
  }
}
