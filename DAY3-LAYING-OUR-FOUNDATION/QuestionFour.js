import React from "react";
import ReactDOM from "react-dom/client";
import dot from "./assets/dot.png";
import userIcon from "./assets/user-icon.png";

const HeaderElement = () => {
  return (
    <header className="header">
      <img src={dot} alt="Logo" className="header__logo" />
      <input type="text" placeholder="Search" className="header__search" />
      <button className="header__user-button">
        <img src={userIcon} alt="User" className="header__user-icon" />
      </button>
    </header>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderElement />);
