import { useState } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline"

const loggedInUser = () => {
  //API TO AUTHENTICATE USER
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        src={Logo}
        alt="None"
      ></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const online = useOnline();
  return (
    <div className="header">
      <Title />
      <h1>{online ? "😊" : "🚩"}</h1>
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          {/* <a href="about">
            <li>About</li>
          </a> */}

          <li>
            <Link to="/about">About </Link>
          </li>

          <li>
            <Link to="/contact"> Contact Us</Link>
          </li>

          <li>
            <Link to="/instamart"> Instamart</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
