import { Outlet } from "react-router-dom";
// import Profile from "./Profile";
import React from "react";
import { Component } from "react";
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import UserContext from "../utils/UserContext";
// const About2 = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>This is Chapter07 - About Us Page</p>
//       {/* <Outlet/> */}
//       <ProfileFunctionalComponent name={"Akshay"} />
//       <Profile name={"AkshayClass"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent ::Constructor");
  }

  componentDidMount() {
    //best place to make an API call
    // console.log("Parent :Component Did Mount");
  }
  render() {
    // console.log("Parent ::render");
    return (
      <div>
        <h1 className="text-xl font-bold">About Us Page</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h4 className="text-black font-bold">
              {user.name}-{user.email}
            </h4>
          )}
        </UserContext.Consumer>

        <p>This is Chapter07 - About Us Page</p>
        {/* <Outlet/> */}
        {/* <ProfileFunctionalComponent name={"Akshay"} /> */}
        <Profile name={"first child"} />
        {/* <Profile name={"second child"} /> */}
        <ProfileFunctionalComponent />
      </div>
    );
  }
}
export default About;
