import React, { useCallback } from "react";
import ReactDOM from "react-dom/client";
/**
 * Header
 *  -Logo
 *  -List Item
 * Body
 *  - Search Bar
 *  -Restraunt List
 *    -Restraunt Card
 *    -Image
 *     - Name
 *     -Rating
 *       -Cuisines
 * Footer
 */
const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
        alt="None"
      ></img>
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const restrauntList = [
  {
    name: "Papa John's Pizza",
    image:
      "https://www.papajohns.com/wp-content/uploads/2019/03/Papa_Johns_Pizza_Logo.png",
    cuisines: ["pizza", "italian"],
    ratings: {
      average: 3.5,
      count: 122,
    },
  },
  {
    name: "Sushi Restaurant",
    image: "https://sushi-restaurant.com/images/logo.png",
    cuisines: ["sushi", "japanese"],
    ratings: {
      average: 4.5,
      count: 32,
    },
  },
  {
    name: "Indian Curry House",
    image: "https://indian-curry-house.com/images/logo.png",
    cuisines: ["indian"],
    ratings: {
      average: 4.0,
      count: 87,
    },
  },
  {
    name: "Chinese Takeout",
    image: "https://chinese-takeout.com/images/logo.png",
    cuisines: ["chinese"],
    ratings: {
      average: 3.0,
      count: 56,
    },
  },
  {
    name: "Mexican Grill",
    image: "https://mexican-grill.com/images/logo.png",
    cuisines: ["mexican"],
    ratings: {
      average: 2.5,
      count: 23,
    },
  },
  {
    name: "Thai Street Food",
    image: "https://thai-street-food.com/images/logo.png",
    cuisines: ["thai"],
    ratings: {
      average: 4.5,
      count: 95,
    },
  },
];
// const RestrauntCard = (props) => {
//   return (
//     <div className="card">
//       <img src={props.restraunt.image} />
//       <h2>{props.restraunt?.name}</h2>
//       <h3>{props.restraunt?.cuisines.join(",")}</h3>
//       <h4>{props.restraunt?.ratings?.average} STARS</h4>
//     </div>
//   );
// };

// const RestrauntCard = ({ restraunt }) => {
//   return (
//     <div className="card">
//       <img src={restraunt.image} />
//       <h2>{restraunt?.name}</h2>
//       <h3>{restraunt?.cuisines.join(",")}</h3>
//       <h4>{restraunt?.ratings?.average} STARS</h4>
//     </div>
//   );
// };
// const RestrauntCard = () => {
//   return (
//     <div className="card">
//       <img src={restrauntList[0].image} />
//       <h2>{restrauntList[0]?.name}</h2>
//       <h3>{restrauntList[0]?.cuisines.join(",")}</h3>
//       <h4>{restrauntList[0]?.ratings?.average} STARS</h4>
//     </div>
//   );
// };

// const RestrauntCard = ({ restraunt }) => {
//   const { image, name, cuisines, average } = restraunt;
//   return (
//     <div className="card">
//       <img src={image} />
//       <h2>{name}</h2>
//       <h3>{cuisines.join(",")}</h3>
//       <h4>{average} STARS</h4>
//     </div>
//   );
// };

const RestrauntCard = ({ image, name, cuisines, ratings, average }) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{average} STARS</h4>
    </div>
  );
};
//props => properties

// use spread operator

const Body = () => {
  return (
    <div className="restraunt-list">
      {restrauntList.map((restraunt) => {
        return <RestrauntCard {...restraunt} />;
      })}
      ;
    </div>
  );
};
// const Body = () => {
//   return (
//     <div className="restraunt-list">
//       <RestrauntCard {...restrauntList[0]} />
//       <RestrauntCard {...restrauntList[1]} />
//       <RestrauntCard {...restrauntList[2]} />
//       <RestrauntCard {...restrauntList[3]} />
//     </div>
//   );
// };
// const Body = () => {
//   return (
//     <div className="restraunt-list">
//       <RestrauntCard
//         name={restrauntList[0].name}
//         cuisines={restrauntList[0].cuisines}
//       />
//       <RestrauntCard
//         name={restrauntList[1].name}
//         cuisines={restrauntList[1].cuisines}
//       />
//       <RestrauntCard
//         name={restrauntList[2].name}
//         cuisines={restrauntList[2].cuisines}
//       />
//       <RestrauntCard
//         name={restrauntList[3].name}
//         cuisines={restrauntList[3].cuisines}
//       />
//     </div>
//   );
// };
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
// const RestrauntCard = () => {
//   return (
//     <div className="card">
//       <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tshhej1qjn8wu3gadex4"></img>
//       <h2>Burger King</h2>
//       <h3>Burgesrs,American</h3>
//       <h4>4 STAR</h4>
//     </div>
//   );
// };
//second way of giving css inline css

// const styleObj = { backgroundColor: "red", };
// const jsx = (
//   <div style={styleObj}>
//     <h1>jsx</h1>
//   </div>
// );
// const AppLayout = () => {
//   return (
//     <React.Fragment>
//       <HeaderComponent />
//       <Body />
//       <Footer />
//     </React.Fragment>
//   );
// };
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());
