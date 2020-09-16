import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import Routes from "../../routes/__Routes";

import "./styles.css";

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Routes />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
