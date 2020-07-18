import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "antd/dist/antd.css";
import Home from "./Compounents/Home/Home";
import AddFrom from "./Compounents/AddData/AdData";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/add">
            <AddFrom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
