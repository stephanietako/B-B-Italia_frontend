import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/Home";
// import About from "./components/About";
// import Blocs from "./components/Blocs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/about" element={HomePage} />
          <Route exact path="/products" element={HomePage} />
          <Route exact path="/projects" element={HomePage} />
          <Route exact path="/contact" element={HomePage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
