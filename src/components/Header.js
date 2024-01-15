import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineChecker from "../utils/useOnlineChecker";

const Header = () => {
  const onlineCheck = useOnlineChecker();

  return (
    <div className="flex flex-wrap justify-between shadow-lg bg-orange-100 m-2">
      <img src={LOGO_URL} className="w-28"></img>
      <div className="nav-items">
        <ul className="flex m-10">
          <li className="px-4">{onlineCheck === true ? "✅" : "❤️"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery Store</Link>
          </li>
          <li className="px-4">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
