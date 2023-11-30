import React from "react";
import "./AdminLayout.scss";
import FullPageLayout from "../FullPage/FullPageLayout";
import {
  faArrowRightFromBracket,
  faBars,
  faCarSide,
  faPlus,
  faUsers,
  faWallet,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="globalAdmin">
      <FullPageLayout>
        <div className="container_w adminContainer">
          {!mobileMenu && (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setMobileMenu(true)}
              className="bars hideWeb"
            />
          )}
          <div className={`sideBarAdminMobile ${mobileMenu ? "" : "show"}`}>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={() => setMobileMenu(false)}
              className="bars hideWeb"
            />
            <ul className="sidebarNav">
              <NavLink
                to="/admin"
                end
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>
                  <FontAwesomeIcon icon={faCarSide} />
                  Cars
                </li>
              </NavLink>

              <NavLink
                to="/admin/users"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>
                  <FontAwesomeIcon icon={faUsers} />
                  Users
                </li>
              </NavLink>
              <NavLink
                to="/admin/transactions"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>
                  <FontAwesomeIcon icon={faWallet} />
                  Transactions
                </li>
              </NavLink>
              <NavLink
                to="/admin/add"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                <li>
                  <FontAwesomeIcon icon={faPlus} />
                  Add New Car
                </li>
              </NavLink>
            </ul>

            <p className="logoutButton">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              Log out
            </p>
          </div>

          <div className="adminPage">{children}</div>
        </div>
      </FullPageLayout>
    </div>
  );
};

export default AdminLayout;
