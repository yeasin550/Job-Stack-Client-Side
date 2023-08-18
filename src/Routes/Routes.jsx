import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/UserAuthentication/Register/Register";
import Login from "../Pages/UserAuthentication/Login/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import UserInfo from "../Pages/UserDetails/UserInfo/UserInfo";
import UserOverView from "../Pages/UserDetails/UserOverView/UserOverView";
// import UserAllJobsData from "../Pages/UserAllJobsData/UserAllJobsData";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <Register></Register>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'profile',
                element: <UserProfile></UserProfile>
            },
            // {
            //     path: 'jobs',
            //     element: <UserAllJobsData></UserAllJobsData>
            // }
        ]
    },
    {
        path: 'userinfo',
        element: <UserInfo></UserInfo>,
        children: [
            {
                path: 'overview',
                element: <UserOverView></UserOverView>
            }
        ]

    }
]);

export default router;