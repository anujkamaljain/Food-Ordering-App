import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} 
        ></img>
      </div>
      <div className="Search">
        <label id="searchlabel">Search</label>
        <input
          placeholder="Search Your Favourite Food "
          inputMode="text"
          id="searchbar"
        ></input>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;