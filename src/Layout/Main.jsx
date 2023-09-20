import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Loading from "../Pages/Shared/Loading/Loading";
import { useEffect } from "react";
import { useState } from "react";
const Main = () => {
  const location = useLocation();
  const noHeaderfooter = location.pathname.includes('login') ||
    location.pathname.includes('signup') ||
    location.pathname.includes('massageroute') ||
    location.pathname.includes('companyregister') ||
    location.pathname.includes('termsandconditions') || location.pathname.includes('notification');

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <div className="">
      {
        loading ? <>
          <Loading />
        </> : <>
          <Navbar />
          <Outlet />
          {!noHeaderfooter && <Footer />}
        </>
      }
    </div>
  );
};
export default Main;
