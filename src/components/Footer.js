import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer>
        <h2>B&B Italia </h2>
        <ul>
          <Link to="/">Lien 1</Link>
          <Link to="/">Lien 2</Link>
          <Link to="/">Mentions légales</Link>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
