import React from "react";
// import Link from "./Link";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Accordion
      </Link>
      <Link to="/list" className="item">
        Search
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown
      </Link>
      <Link to="/translate" className="item">
        Translate
      </Link>
    </div>
  );
};
export default Header;
