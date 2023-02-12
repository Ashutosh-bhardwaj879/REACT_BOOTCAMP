import { useState, useContext } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const loggedInUser = () => {
  //API TO AUTHENTICATE USER
  return false;
};

const Title = () => {
  return (
    <a href="/">
      <img className="h-24 px-4" src={Logo} alt="None"></img>
    </a>
  );
};

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const online = useOnline();

  const { user } = useContext(UserContext);
  // console.log(user)
  // console.log(useContext(UserContext));
  // console.log(useContext(UserContext));

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <h1>{online ? "😊" : "🚩"}</h1>
      <div className="">
        <ul className="flex py-7">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          {/* <a href="about">
            <li>About</li>
          </a> */}

          <li className="px-2">
            <Link to="/about">About </Link>
          </li>

          <li className="px-2">
            <Link to="/contact"> Contact Us</Link>
          </li>

          <li className="px-2">
            <Link to="/instamart"> Instamart</Link>
          </li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {user.name}
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
};
export default Header;
