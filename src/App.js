import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import About from "./components/About";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={HomePage} />
          <Route path="/about" element={About} />
          <Route path="/products" element={HomePage} />
          <Route path="/bandb" element={HomePage} />
          <Route path="/maxalto" element={HomePage} />
          <Route path="/arclinea" element={HomePage} />
          <Route path="/projects" element={HomePage} />
          <Route path="/contact" element={HomePage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
