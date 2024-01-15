import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);

  const { menuId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      MENU_API + menuId + "&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await response.json();

    console.log(json);
    setResMenu(json);
  };

  if (resMenu === null) {
    return <Shimmer />;
  }

  const { name } = resMenu?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="menu-container">
      <div className="">
        {console.log("body rendered")}
        <h1>{name}</h1>
        <ul>
          {itemCards.map((items) => (
            <li>
              {" "}
              {items.card.info.name} - {items.card.info.price / 100}
            </li>
          ))}
        </ul>
        <h1></h1>
        <h1></h1>
      </div>
    </div>
  );
};

export default RestaurantMenu;
