import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Categories from "../Pages/Categories/Categories";
import AllBuyers from "../Pages/DashBoards/Admin/AllBuyers";
import AllSellers from "../Pages/DashBoards/Admin/AllSellers";
import Dashboard from "../Pages/DashBoards/Admin/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import PrivateRoute from "./PrivateRoute";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
import AdminRoute from "./AdminRoute";
import SellerRoute from "./SellerRoute";
import BuyerRoute from "./BuyerRoute";
import Blogs from "../Pages/Blogs/Blogs";
import AddProduct from "../Pages/DashBoards/Seller/AddProduct";
import Profile from "../Pages/Profile/Profile";
import MyProduct from "../Pages/DashBoards/Seller/MyProduct";
import MyBuyers from "../Pages/DashBoards/Seller/MyBuyers";
import ReportedItem from "../Pages/DashBoards/Admin/ReportedItem";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/all-phones",
        element: <Categories></Categories>,
      },
      {
        path: "/all-phones/:category",
        element: <SingleCategory></SingleCategory>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/all-phones/${params.category}`),
      },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <AdminRoute>
            <Dashboard></Dashboard>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard/all-buyers",
        element: (
          <AdminRoute>
            <AllBuyers></AllBuyers>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard/all-sellers",
        element: (
          <AdminRoute>
            <AllSellers></AllSellers>
          </AdminRoute>
        ),
      },
      {
        path: "/admin/dashboard/reported-items",
        element: (
          <AdminRoute>
            <ReportedItem></ReportedItem>
          </AdminRoute>
        ),
      },
      {
        path: "/seller/dashboard",
        element: (
          <SellerRoute>
            <Dashboard></Dashboard>
          </SellerRoute>
        ),
      },
      {
        path: "/seller/dashboard/add-product",
        element: (
          <SellerRoute>
            <AddProduct></AddProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/seller/dashboard/my-products",
        element: (
          <SellerRoute>
            <MyProduct></MyProduct>
          </SellerRoute>
        ),
      },
      {
        path: "/seller/dashboard/my-buyers",
        element: (
          <SellerRoute>
            <MyBuyers></MyBuyers>
          </SellerRoute>
        ),
      },
      {
        path: "/buyer/dashboard",
        element: (
          <BuyerRoute>
            <Dashboard></Dashboard>
          </BuyerRoute>
        ),
      },
      {
        path: "/buyer/dashboard/all-buyers",
        element: (
          <BuyerRoute>
            <AllBuyers></AllBuyers>
          </BuyerRoute>
        ),
      },
      {
        path: "/buyer/dashboard/all-sellers",
        element: (
          <BuyerRoute>
            <AllSellers></AllSellers>
          </BuyerRoute>
        ),
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
