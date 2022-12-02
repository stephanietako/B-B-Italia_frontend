import React from "react";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();

  const navigateToContacts = () => {
    // 👇️ navigate to /contacts
    navigate("/contact");
  };

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate("/");
  };

  return (
    <div id="test">
      TEST !!!!!!!!!!!!!!!!!!
      <button onClick={navigateHome}>Home</button>
      <hr />
      <button onClick={navigateToContacts}>Contacts</button>
    </div>
  );
};

export default Test;
