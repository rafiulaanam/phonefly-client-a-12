import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Categories from "../Pages/Categories/Categories";
import AllBuyers from "../Pages/DashBoard/AllBuyers";
import AllSellers from "../Pages/DashBoard/AllSellers";
import Dashboard from "../Pages/DashBoard/Dashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/LoginRegister/Login";
import Register from "../Pages/LoginRegister/Register";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";

export const router = createBrowserRouter([
    {
        path: "/",
       element:<Main></Main>,
       errorElement:<Error></Error>,
       children:[
        {
            path:"/",
            element:<Home></Home>,

        },
        {
            path:"/login",
            element:<Login></Login>,

        },
        {
            path:"/Register",
            element:<Register></Register>,

        },
        {
            path:"/all-phones",
            element:<Categories></Categories>,

        },
        {
            path:"/all-phones/:category",
            element:<SingleCategory></SingleCategory>,
            loader:({params})=>fetch(`http://localhost:5000/all-phones/${params.category}`)

        },
       ]

    },
    {
        path: "/dashboard",
       element:<DashboardLayout></DashboardLayout>,
       errorElement:<Error></Error>,
       children:[
        {
            path:"/dashboard",
            element:<Dashboard></Dashboard>,

        },
        {
            path:"/dashboard/all-buyers",
            element:<AllBuyers></AllBuyers>,

        },
        {
            path:"/dashboard/all-sellers",
            element:<AllSellers></AllSellers>,

        }
       ]

    }

])