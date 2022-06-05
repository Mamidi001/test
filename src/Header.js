import React from "react";

{
  /* This a header component and here we can navigate throught all main routes  */
}
const Header = () => {
  return (
    <nav>
      <img
        src="https://i.ibb.co/VBSK5pS/logo.png"
        alt="Triangle logo"
        className="header_logo"
      />
      <ul className="nav-links">
        <a href="#">
          <li>Home</li>{" "}
        </a>
        <a href="#">
          <li>AboutUs</li>{" "}
        </a>
      </ul>
    </nav>
  );
};
export default Header;
