import { useEffect, useState } from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home";
import MentionsLegales from "./components/MentionsLegales";
import ScrollToTop from "./components/ScrollToTop";
import Page404 from "./components/Page404";
import Banner from "./components/Banner";

const App = () => {
  // Navigator language property
  const userLang = navigator.language;
  const [localLang, setLocalLang] = useState(
    localStorage.getItem("__language_bb")
  );

  useEffect(() => {
    if (
      !localLang ||
      (!localLang.includes("en") && !localLang.includes("fr"))
    ) {
      if (userLang.includes("fr")) {
        setLocalLang("fr");
        localStorage.setItem("__language_bb", "fr");
      } else {
        setLocalLang("en");
        localStorage.setItem("__language_bb", "en");
      }
    } else {
      setLocalLang(localLang);
      localStorage.setItem("__language_bb", localLang);
    }
  }, [localLang, userLang]);

  return (
    <div className="App">
      <Banner />
      <ScrollToTop />
      <Routes>
        <Route element={<Layout lang={localLang} />}>
          <Route
            path="/"
            element={<HomePage lang={localLang} setLang={setLocalLang} />}
          />
        </Route>
        <Route path="/terms" element={<MentionsLegales lang={localLang} />} />
        <Route path="*" element={<Page404 lang={localLang} />} />
      </Routes>
    </div>
  );
};

export default App;
