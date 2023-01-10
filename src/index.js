import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Maintenance from "./pages/Maintenance";
import { BrowserRouter as Router } from "react-router-dom";

const maintenance = process.env.REACT_APP_MODE_MAINTENANCE
  ? JSON.parse(process.env.REACT_APP_MODE_MAINTENANCE)
  : false;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>{maintenance ? <Maintenance /> : <App />}</Router>);
