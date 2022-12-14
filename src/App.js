import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import MentionsLegales from "./components/MentionsLegales";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route path="/terms" element={<MentionsLegales />} />
      </Routes>
    </div>
  );
};

export default App;
