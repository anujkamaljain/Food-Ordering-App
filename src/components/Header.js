import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=>store.cart.items);


  return (
    <div className="sticky top-0 z-1 flex h-20 items-center justify-between border-b-1 border-gray-300 bg-white p-1">
      <img
        className="ml-3 h-16 w-16 rounded-full border-3 border-dotted border-orange-400"
        src={LOGO_URL}
      ></img>
      <div className="w-241">
        <ul className="flex justify-around">
          <li className="transition-border m-1 cursor-pointer border-t-0 border-orange-400 duration-80 ease-out hover:border-t-1 hover:border-b-1 sm:mt-2 sm:text-gray-950 lg:text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="transition-border m-1 cursor-pointer border-t-0 border-orange-400 duration-80 ease-out hover:border-t-1 hover:border-b-1 sm:mt-2 sm:text-gray-950 lg:text-2xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="transition-border m-1 cursor-pointer border-t-0 border-orange-400 duration-80 ease-out hover:border-t-1 hover:border-b-1 sm:mt-2 sm:text-gray-950 lg:text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="transition-border m-1 cursor-pointer border-t-0 border-orange-400 duration-80 ease-out hover:border-t-1 hover:border-b-1 sm:mt-2 sm:text-gray-950 lg:text-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="m-1 cursor-default sm:mt-2 sm:text-gray-950 lg:text-2xl">
            OnlineStatus: {onlineStatus ? "✅" : "🔴"}
          </li>
        </ul>
      </div>
      <div className="text-center">
        <button
          className="mt-1.2 h-8 w-24 cursor-pointer rounded-sm border border-black text-base text-orange-400 transition duration-80 ease-in hover:-translate-y-0.5"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
        <ul>
          {btnName === "Logout" ? (
            <li className="mt-1.5 cursor-default border-1 border-dashed text-sm font-bold text-orange-400">
              {loggedInUser}
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
