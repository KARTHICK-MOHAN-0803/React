import Restaurant from "./Restaurant";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnlineChecker from "../utils/useOnlineChecker.js";

//console.log(resList);

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);

  const [filteredData, setFilteredData] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const food = await response.json();

    setListOfRes(
      food?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      food?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineChecker();

  if (onlineStatus === false)
    return (
      <h1>look like your are offline check your internet connection !!! </h1>
    );

  if (listOfRes.length === 0) return <Shimmer />;

  return (
    <div className="mx-20">
      <div className="filter-button flex ">
        <div className="mt-6">
          <input
            className="border border-solid border-black m-3 px-1 py-1"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="bg-green-100 m-3 px-4 py-1 rounded-lg"
            onClick={() => {
              const filteredSearch = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredData(filteredSearch);
            }}
          >
            search
          </button>
        </div>
        <div>
          <button
            className="bg-green-100 m-8 px-4 py-2 rounded-lg"
            onClick={() => {
              const filterData = listOfRes.filter(
                (res) => res.info.avgRating > 4.4
              );
              setFilteredData(filterData);
            }}
          >
            top rated restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredData.map((rest) => (
          <Link to={"/restaurants/" + rest.info.id}>
            <Restaurant resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
