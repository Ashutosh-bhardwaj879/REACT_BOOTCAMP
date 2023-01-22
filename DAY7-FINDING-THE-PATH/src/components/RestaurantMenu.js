import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  //how to read a dynamic url params
  // const params = useParams();
  // const {id} = params;
  const { id } = useParams();

  const [restaurant, setRestaurant] = useState(null);
  // const [restaurant, setRestaurant] = useState({});we were using {} empty object
  //as initial render so we were getting undefined error , OOPS etc, so we used null and used
  //consitional rendering

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    // console.log(json);
    setRestaurant(json.data);
  }
  // early return
  // if (!restaurant) {
  //     return <Shimmer />;
  // }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restaurant id : {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
      </div>
      {/* <div>{console.log(Object.values(restaurant.menu?.items))}</div> */}
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default RestaurantMenu;
