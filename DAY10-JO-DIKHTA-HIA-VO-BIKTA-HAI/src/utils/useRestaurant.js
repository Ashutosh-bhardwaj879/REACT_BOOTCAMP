import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (restaurantId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + restaurantId);
    const json = await data.json();
    // console.log(json);
    setRestaurant(json.data);
  }
  //return restaurant data
  return restaurant;
};

export default useRestaurant;
