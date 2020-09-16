import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

//Containers
import Home from "../../containers/Home";
import SearchZone from "../../containers/SearchZone";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search-zone" component={SearchZone} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
