import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../Hooks/useAdmin";
import DashboardNavbar from "../Pages/Shared/Navbar/DashboardNavbar";


const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const menubar = (
    <>
      <li className="font-bold text-md">
        <Link to={"/admin/dashboard"}>Dashboard</Link>
      </li>
      {isAdmin && (
        <>
          <li className="font-bold text-md">
            <Link to={"/admin/dashboard/all-sellers"}>All Sellers</Link>
          </li>

          <li className="font-bold text-md  ">
            <Link to={"/admin/dashboard/all-buyers"}>All Buyers</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <DashboardNavbar></DashboardNavbar>

      <div className="drawer drawer-mobile ">
        <input id="dashboard-modal" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-[#E2E8EC] ">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-modal" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content">
            {menubar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
