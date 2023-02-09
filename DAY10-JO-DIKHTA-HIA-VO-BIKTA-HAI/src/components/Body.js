import { restaurantList } from "../constants";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // const searchValue = "KFC";

  // searchText is a local state variable
  //const [searchText] = useState("KFC");
  //function foes inside const useState()
  // here we are using restaurantlist and this is why intial render
  //we willsee 8 data now we will remove this
  // const [restaurants, setRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  /*
  const searchVar = useState();
  const [varibaleNmae,functionName] = searchVar
  */
  /*
  useEffect(() => {
    //API CALL
    console.log("USE EFFECT CALLED");
  }, []);

  console.log(
    "pre - render wirten after useEffect but it will be printed first"
  );
*/
  /*
  useEffect(() => {
    console.log("USE EFFECT CALLED");
  }, [searchInput]);

  console.log(
    "pre - render wirten after useEffect but it will be printed first"
  );
  */

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

  // function filterData(searchText, restaurants) {
  //   return restaurants.filter((restaurant) =>
  //     restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  //   );
  // }

  //conditional rendering
  //if data is empty then shimmer UI
  ///else API data
  /* const online = useOnline();

   if (!online) {
     return <h1>Please check your internet connection</h1>;
   }*/

  // const searchStyleCSS = {
  //   backgroundColor: "red",
  // };

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
