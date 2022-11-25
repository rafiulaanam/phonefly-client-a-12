import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import PrimaryButton from "../../../Components/Buttons/PrimaryButton";
import { AuthContext } from "../../../Context/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
 const {user}=useContext(AuthContext)
 const [isAdmin] = useAdmin(user?.email)
  const menuItems = (
    <> 
      <li>
        <Link to={"/"}>Home</Link>
        <Link to={"/all-phones"}>All Phone</Link>
      </li>
    </>
  );

  const menuButton = (
    <>

    {
      isAdmin &&
      <>
        <Link to={"/admin/dashboard"} className="btn text-left btn-ghost mr-2">
        Dashboard
      </Link>
      </>
    }
    
      <Link to={"/login"} className="btn text-left btn-ghost mr-2">
        Login
      </Link>

      <Link to={"/register"}>
        <PrimaryButton>Register</PrimaryButton>
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
              {menuButton}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost normal-case text-xl">
            <img className="w-10" src={logo} alt="" />
            PhoneFly
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuButton}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
