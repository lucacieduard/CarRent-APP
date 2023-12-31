import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.scss";
import { faBell, faSignOut } from "@fortawesome/free-solid-svg-icons";
import FullPageLayout from "../../layout/FullPage/FullPageLayout";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { motion } from "framer-motion";
import Search from "./Search";
import Favorites from "./Favorites";
const NavBar = () => {
  const authCtx = useContext(AuthContext);

  return (
    <FullPageLayout>
      <div className="navbar container_w">
        <Link to={"/"} style={{ textDecoration: "none" }} className="logo">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="logo"
          >
            MORENT
          </motion.span>
        </Link>
        {authCtx.user ? (
          <>
            <div className="icons">
              <Favorites />
              <span className="icon">
                <FontAwesomeIcon icon={faBell} className="faicon" />
              </span>
              <span className="icon">
                <FontAwesomeIcon
                  icon={faSignOut}
                  className="faicon"
                  onClick={() => signOut(auth)}
                />
              </span>
            </div>
            <img
              src={authCtx.user.fileURL}
              alt="profile picture"
              className="profile_pic"
            ></img>
          </>
        ) : (
          <div className="authLinks">
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
          </div>
        )}
        <Search />
      </div>
    </FullPageLayout>
  );
};

export default NavBar;
