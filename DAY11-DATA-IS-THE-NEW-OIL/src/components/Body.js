import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    //API CALL
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //this is a bad way, use optional chaining
    //setRestaurants(json.data.cards[2].data.data.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  //early return
  if (!allRestaurants) {
    return null;
  }

  // if (filteredRestaurants?.length === 0) {
  //   return <h1>No restaurants matched your search criteria</h1>;
  // }

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 m-y-4">
        <input
          type="text"
          placeholder="Search"
          className="focus:bg-slate-100 p-2 m-2"
          value={searchInput}
          //e.target.value = whatever you write inside keyboard
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="p-1 m-1 bg-purple-900 hover:bg-pink-600 text-white rounded-md"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchInput, allRestaurants);
            //update the state--restaurantVariable
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          value={user.name}
          onChange={(e) =>
            setUser({
              name: e.target.value,
              email: e.target.value + "@gmail.com",
            })
          }
        ></input>
      </div>
      <div className="flex flex-wrap">
        {/* You have to write logic for NO RESTAURANT FOUND HERE */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
