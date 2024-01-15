import { useState, useEffect } from "react";

const useResFetch = (R_LIST) => {
  const [listOfRes, setListOfRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(R_LIST);
    const food = await response.json();

    setListOfRes(
      food?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRes;
};

export default useResFetch;
