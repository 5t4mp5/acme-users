import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import Main from "./components/Main";

const root = document.querySelector("#root");
ReactDOM.render(
  <HashRouter>
    <Route component={Main} />
  </HashRouter>,
  root
);
