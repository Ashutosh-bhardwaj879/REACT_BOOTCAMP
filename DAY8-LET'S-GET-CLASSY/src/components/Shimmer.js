import React from "react";
import { ShimmerPostList } from "react-shimmer-effects-18";

const Shimmer = () => {
  return <ShimmerPostList postStyle="STYLE_ONE" col={3} row={3} gap={30} />;
};

export default Shimmer;
// <div className="restaurant-list">
//   {Array(10)
//     .fill("")
//     .map((e, index) => (
//       <div className="shimmer-card" key={index}></div>
//     ))}
// </div>
