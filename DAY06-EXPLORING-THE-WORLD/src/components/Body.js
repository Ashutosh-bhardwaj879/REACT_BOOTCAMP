import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";

const Body = () => {
  // const searchValue = "KFC";

  // searchText is a local state variable
  //const [searchText] = useState("KFC");
  //function foes inside const useState()
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
  /*
  const searchVar = useState();
  const [varibaleNmae,functionName] = searchVar
  */
  useEffect(() => {
    //API CALL
  }, []);

  function filterData(searchText, restaurants) {
    return restaurants.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={searchInput}
          //e.target.value = whatever you write inside keyboard
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, restaurants);
            //update the state--restaurantVariable
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestrauntCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
        ;
      </div>
    </>
  );
};

export default Body;
