import React from "react";
import ReactDOM from "react-dom/client";
/*
/* JSX */
/*Create the same element using JSX*/

// const heading1 = <h1>Heading1</h1>;
//JSX => React.createElement() => Object => HTML DOM
const containers = (
  <div className="container">
    <header className="header">
      <h1 id="h1" key="h1">
        Heading1
      </h1>
      <h2 id="h2" key="h2">
        Heading2
      </h2>
    </header>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(containers);
