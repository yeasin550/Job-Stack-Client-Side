import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/UserAuthentication/Register/Register";
import Login from "../Pages/UserAuthentication/Login/Login";
import UserProfile from "../Pages/UserProfile/UserProfile";
import MyNetwork from "../Pages/SelfPostAllPage/MyNetWork/MyNetwork";
import JobsRoute from "../Pages/JobPostAllPage/JobsRoutePages/JobsRoute";
import MessagingRoute from "../Pages/MessagingAllPage/MessagingRoute/MessagingRoute";
import JobApplyForm from "../Pages/JobPostAllPage/JobApplyForm/JobApplyForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
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
        // loader: ({ params }) =>fetch(`https://jobstack-backend-teal.vercel.app/job/${params.id}`),
      },
    ],
  },
  {},
]);

export default router;