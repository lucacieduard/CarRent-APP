import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.scss";
import {
  faMagnifyingGlass,
  faHeart,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">MORENT</span>

      <div className="icons">
        <span className="icon">
          <FontAwesomeIcon icon={faHeart} className="faicon" />
        </span>
        <span className="icon">
          <FontAwesomeIcon icon={faBell} className="faicon" />
        </span>
      </div>
      <img
        src="/profile.png"
        alt="profile picture"
        className="profile_pic"
      ></img>
      <div className="search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
        <input
          type="text"
          className="input"
          placeholder="Search something here..."
        />
      </div>
    </div>
  );
};

export default NavBar;
