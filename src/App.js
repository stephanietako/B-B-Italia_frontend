import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import About from "./components/About";
// import MentionsLegales from "./components/MentionsLegales";
// import Test from "./pages/Test";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import MentionsLegalesPage from "./pages/MentionsLegalesPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/welcome" element={<HomePage />} />
          <Route path="/about" element={About} />
          <Route path="/products" element={HomePage} />
          <Route path="/bandb" element={HomePage} />
          <Route path="/maxalto" element={HomePage} />
          <Route path="/arclinea" element={HomePage} />
          <Route path="/projects" element={HomePage} />
          <Route path="/contact" element={<HomePage />} />
          {/* <Route path="/terms" element={<Navigate to="/terms" />} /> */}
          {/* <Footer /> */}
          {/* <Route path="/terms" element={<MentionsLegales />} />
          {/* <Route path="/terms" element={<Navigate to="/terms" />} /> */}
          {/* <Route path="/test" element={<Test />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
