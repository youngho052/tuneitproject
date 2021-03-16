import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Pages/Main/Main";
import About from "./Pages/About/About";
import Product from "./Pages/Product/Product";
import Solution from "./Pages/Solution/Solution";
import Contact from "./Pages/Contact/Contact";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
        <Route path="/solution" component={Solution} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default Routes;
