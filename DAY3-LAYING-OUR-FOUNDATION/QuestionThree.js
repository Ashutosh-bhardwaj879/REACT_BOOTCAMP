import ReactDOM from "react-dom/client";
/*
React Element VS Functional Component
*/

/*
JSX Expression
---------------

(
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

component
-----------

functional component (new way)
class component (old way)



What is functional component?
-------------------------------
functional componet is a normal function, it is returning jsx
A function is returning a react element it is a functional component
Name of component starts with a capital letter
No it is not mandatory
*/

// React Element
// const heading = (
//   <div>
//     <h1>Heading1</h1>
//   </div>
// );
// //Functional Component
// const HeaderComponent = () => {
//   return <h1>HeaderComponent</h1>;
// };
// //o Create a functional component of the same with JSX
// const HomeWork3 = () => {
//   return (
//     <div className="container">
//       <header>
//         <h1>Header1</h1>
//         <h2>Header2</h2>
//       </header>
//     </div>
//   );
// };

// const HomeWork3_1 = () => (
//   <div className="container">
//     <header>
//       <h1>Header1</h1>
//       <h2>Header2</h2>
//     </header>
//   </div>
// );

// const HomeWork3_2 = function () {
//   <div className="container">
//     <header>
//       <h1>Header1</h1>
//       <h2>Header2</h2>
//     </header>
//   </div>;
// };

//writing react element in functional component

const heading1 = (
  <div className="heading1">
    <h2>React Element</h2>
  </div>
);

const Heading2 = () => (
  <div className="heading2">
    <h2>React Component</h2>
  </div>
);

// Three ways of rendering Header Component
// root.render(<HeaderComponent></HeaderComponent>);
// root.render(<HeaderComponent />);
// root.render(Heading3());

// Pass attributes into the tag in JSX
/*
Entering React props -- where you can pass data from one component to another in React -- by defining custom HTML attributes to which you assign your data with JSX's syntax
*/
const Greeting = () => {
  const greeting = "Ashutosh Hello";
  return (
    <div>
      <Welcome text={greeting} />
    </div>
  );
};

const Welcome = (props) => {
  return <h1>{props.text}</h1>;
};
//Composition Component
const Heading3 = () => {
  return (
    <div>
      {heading1}
      {Heading2()}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading3 />);
