import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/UserAuthentication/Register/Register";
import Login from "../Pages/UserAuthentication/Login/Login";
import MyNetwork from "../Pages/SelfPostAllPage/MyNetWork/MyNetwork";
import JobsRoute from "../Pages/JobPostAllPage/JobsRoutePages/JobsRoute";
import MessagingRoute from "../Pages/MessagingAllPage/MessagingRoute/MessagingRoute";
import JobApplyForm from "../Pages/JobPostAllPage/JobApplyForm/JobApplyForm";
import UserProjectUpdateForm from "../Pages/UserDetails/userProjectUpdateData/UserProjectUpdateForm";
import ErrorPage from "../Pages/Error/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "signup",
            element: <Register></Register>,
          },
          {
            path: "login",
            element: <Login></Login>,
          },
          {
            path: "profile",
            element: <UserProfile></UserProfile>,
          },
          {
            path: "mynetwork",
            element: <MyNetwork></MyNetwork>,
          },
          {
            path: "jobsroute",
            element: <JobsRoute></JobsRoute>,
          },
          {
            path: "massageroute",
            element: <MessagingRoute></MessagingRoute>,
          },
          {
            path: "jobApplyForm/:id",
            element: <JobApplyForm></JobApplyForm>,
          },
          {
            path: "projectupdate/:id",
            element: <UserProjectUpdateForm></UserProjectUpdateForm>,
          }
        ]
      }
    ]
);

export default router;
