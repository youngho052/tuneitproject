import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Components/NavBar/Nav";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/nav" component={Nav} />
      </Switch>
    </Router>
  );
}

export default Routes;
