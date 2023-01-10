import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Maintenance from "./pages/Maintenance";
import { BrowserRouter as Router } from "react-router-dom";

const { REACT_APP_MODE_MAINTENANCE } = process.env;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    {JSON.parse(REACT_APP_MODE_MAINTENANCE) ? <Maintenance /> : <App />}
  </Router>
);
