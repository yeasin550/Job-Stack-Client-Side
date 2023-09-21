import { Link } from "react-router-dom";
import CareerTab from "./CareerTab";
const PromotingCareer = () => {

  return (
    <div className="max-w-screen-xl px-5 mx-auto mt-20">
      <div className="grid lg:grid-cols-2 gap-12 dark:bg-gradient-to-r from-gray-700 via-gray-900 to-black py-4">
        <div className="w-full justify-center items-center lg:mt-28  space-y-9">
          <h1 className="lg:text-5xl text-3xl font-bold">Promoting Career</h1>
          <p className="text-lg">
            We believe in your potential, and we're here to support your journey
            towards a rewarding career. Take the first step today and transform
            your aspirations into achievements.
          </p>

          <Link to="jobsroute">
            <button className="banner-button mt-6">Browse Job</button>
          </Link>
        </div>
        <div className="">
          <CareerTab />
        </div>
      </div>
    </div>
  );
};

export default PromotingCareer;
