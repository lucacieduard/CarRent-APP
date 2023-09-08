import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.scss";
import {
  faMagnifyingGlass,
  faHeart,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <FullPageLayout>
      <div className="navbar container_w">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span className="logo">MORENT</span>
        </Link>
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
    </FullPageLayout>
  );
};

export default NavBar;
