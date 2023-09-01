import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/UserAuthentication/Register/Register";
import Login from "../Pages/UserAuthentication/Login/Login";
import MyNetwork from "../Pages/SelfPostAllPage/MyNetWork/MyNetwork";
import JobsRoute from "../Pages/JobPostAllPage/JobsRoutePages/JobsRoute";
import MessagingRoute from "../Pages/MessagingAllPage/MessagingRoute/MessagingRoute";
import UserProjectUpdateForm from "../Pages/UserDetails/userProjectUpdateData/UserProjectUpdateForm";
import ErrorPage from "../Pages/Error/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import PraivateRoute from "./PraivateRoute/PraivateRoute";
import CompanyRegistration from "../Pages/UserAuthentication/CompanyRegistration/CompanyRegistration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
                 path: 'companyregister',
                 element: <CompanyRegistration></CompanyRegistration>
            },
            {
                path: 'profile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'mynetwork',
                element: <MyNetwork></MyNetwork>
            },
            {
                path: 'jobsroute',
                element: <JobsRoute></JobsRoute>
            },
            {
                path: 'massageroute',
                element: <MessagingRoute></MessagingRoute>
            },
            {
                path: 'projectupdate/:id',
                element: <UserProjectUpdateForm></UserProjectUpdateForm>
            }

        ]
    },
]);

export default router;