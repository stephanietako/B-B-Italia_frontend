import React from "react";
import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import About from "./components/About";
import MentionsLegales from "./components/MentionsLegales";
import Test from "./pages/Test";
import ScrollTopSection from "./components/ScrollToTopSection";

// import MentionsLegalesPage from "./pages/MentionsLegalesPage";

function App() {
  return (
    <div className="App">
      <ScrollTopSection />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/showroom" element={<HomePage />} />
          <Route path="/products" element={<HomePage />} />
          <Route path="/bandb" element={<HomePage />} />
          <Route path="/maxalto" element={<HomePage />} />
          <Route path="/arclinea" element={<HomePage />} />
          <Route path="/projects" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Route>
        <Route path="/terms" element={<MentionsLegales />} />
        <Route path="/redirect" element={<Navigate to="/" />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
