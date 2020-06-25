import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./views/LandingPage/LandingPage.js";
import VocabularyPage from "./views/VocabularyPage/VocabularyPage.js";
import MetamaskPage from "./views/MetamaskPage/MetamaskPage.js";

import Header from "./components/Header/Header.js";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header startText=" - Hihihihi" />
        <Switch>
          <Route path="/" exact>
            <LandingPage defaultSessionLength="5" />
          </Route>
          <Route path="/vocabulary" exact>
            <VocabularyPage />
          </Route>
          <Route path="/metamask" exact>
            <MetamaskPage />
          </Route>
        </Switch>
      </div>
    );
  }
}
