import { Link } from "react-router-dom";
const Restaurant = (props) => {
  const { resData } = props;
  const { name, areaName, avgRating, cloudinaryImageId } = resData?.info;

  // const{card:{card}} = data;
  // const{info:{name,areaName}} = card;
  return (
    <div className="m-3 p-4 h-[300] w-[200px] bg-stone-300 hover:shadow-2xl hover:bg-orange-100 hover:scale-95 rounded-lg shadow-lg transition ease-in-out">
      <img
        className="w-[190px] h-[180px] rounded-lg shadow-lg "
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>

      <h4>{name}</h4>
      <h4>{areaName}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default Restaurant;
