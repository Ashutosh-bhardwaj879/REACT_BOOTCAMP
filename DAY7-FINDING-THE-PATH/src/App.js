import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
// import { IMG_CDN_URL } from "./constants";
// import * as OBJ from "./components/Header";
// import { Title } from "./components/Header";

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

const AppLayout = () => {
  return (
    <>
      {/* <OBJ.Header/> */}
      <Header />
      {/* <About />
      <Body />
      <Contact /> */}
      {/* {Outlet} */}
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
  // {
  //   path: "/about",
  //   element: <About />,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
