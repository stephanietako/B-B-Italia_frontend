import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={HomePage} />
          <Route path="/products" element={HomePage} />
          <Route exact path="/bandb" element={HomePage} />
          <Route exact path="/maxalto" element={HomePage} />
          <Route exact path="/arclinea" element={HomePage} />
          <Route path="/projects" element={HomePage} />
          <Route path="/contact" element={HomePage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
