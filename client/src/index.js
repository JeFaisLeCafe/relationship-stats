import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
