import React, { useEffect } from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // console.log("then use effect");
    const timer = setInterval(() => {
      console.log("OP");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return ");
    };
  });
  console.log("first render ");
  return (
    <div>
      <h1>Profile</h1>
      <h2>Name:{props.name}</h2>
      <h2>Count:{count}</h2>
      <h2>Count2:{count2}</h2>
      <button
        onClick={() => {
          setCount(1);
          setCount2(1);
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default Profile;
