import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/UserAuthentication/Register/Register";
import Login from "../Pages/UserAuthentication/Login/Login";
import MyNetwork from "../Pages/SelfPostAllPage/MyNetWork/MyNetwork";
import JobsRoute from "../Pages/JobPostAllPage/JobsRoutePages/JobsRoute";
import MessagingRoute from "../Pages/MessagingAllPage/MessagingRoute/MessagingRoute";
import Dashbord from "../Layout/Dashbord";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import UserProjectUpdateForm from "../Pages/UserDetails/userProjectUpdateData/UserProjectUpdateForm";
import ErrorPage from "../Pages/Shared/Error/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import CompanyRegistration from "../Pages/UserAuthentication/CompanyRegistration/CompanyRegistration";
import TermsAndConditions from "../Pages/TermsAndConditions/TermsAndConditions";
import JobApplyForm from "../Pages/JobPostAllPage/JobApplyForm/JobApplyForm";
import UserDynamicProfile from "../Pages/UserDynamic Profile/UserDynamicProfile";
import AboutPage from "../Pages/PagesComponents/AboutPage/AboutPage";
import Contuct from "../Pages/PagesComponents/Contact/Contuct";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome/AdminHome";
import ClientReview from "../Pages/PagesComponents/ClientReview/ClientReview";
import NewsArticles from "../Pages/Dashboard/Admin/NewsArticles/NewsArticles";
import EveryOneSerchJob from "../Pages/JobPostAllPage/EveryOneSerchJob";
import FAQ from "../Pages/PagesComponents/FAQ/FAQ";
import ArticlesAndNews from "../Pages/PagesComponents/ArticlesAndNews/ArticlesAndNews";
import Details from "../Pages/PagesComponents/ArticlesAndNews/Details";
import AllArticles from "../Pages/Dashboard/AllArticles/AllArticles";
import JobTaskForm from "../Pages/JobPostAllPage/JobApplyForm/SendTaskForm";
import Notification from "../Pages/Notification/Notification";
import DynamicJobDetails from "../Pages/JobPostAllPage/DynamicJobDetails";

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
        path: "companyregister",
        element: <CompanyRegistration></CompanyRegistration>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "notification",
        element: <Notification></Notification>,
      },
      {
        path: "dynamicprofile/:id",
        element: <UserDynamicProfile></UserDynamicProfile>,
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
        path: "projectupdate/:id",
        element: <UserProjectUpdateForm></UserProjectUpdateForm>,
      },
      {
        path: "termsandconditions",
        element: <TermsAndConditions />,
      },
      {
        path: "jobApplyForm/:id",
        element: <JobApplyForm></JobApplyForm>,
      },
      {
        path: "jobTaskForm",
        element: <JobTaskForm />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <Contuct />,
      },
      {
        path: "review",
        element: <ClientReview />,
      },
      {
        path: "jobsearch",
        element: <EveryOneSerchJob></EveryOneSerchJob>,
      },
      {
        path: "dynamic/:id",
        element: <DynamicJobDetails></DynamicJobDetails>,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "articles-news",
        element: <ArticlesAndNews />,
      },
      {
        path: "/details/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://jobstack-backend-teal.vercel.app/news-article/${params.id}`
          ),
      },
    ],
  },

  {
    path: "dashbord",
    element: <Dashbord />,
    children: [
      {
        path: "adminhome",
        element: <AdminHome />,
      },
      {
        path: "alluser",
        element: <AllUser />,
      },
      {
        path: "all-articles",
        element: <AllArticles />,
      },
      {
        path: "news-articles",
        element: <NewsArticles />,
      },
    ],
  },
]);

export default router;
