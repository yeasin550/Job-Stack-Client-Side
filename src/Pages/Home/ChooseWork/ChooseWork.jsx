import React from "react";
import { FaPaperPlane, FaSearch, FaUser } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import Work from "./work";
import { Link } from "react-router-dom";

const ChooseWork = () => {
  return (
    <div className="text-white banner">
      <div className="max-w-screen-xl mx-auto px-5 ">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="">
            <h1 className="md:text-4xl text-2xl mb-3 mt-6 font-bold">
              JOBES Working Process
            </h1>
            <p className=" text-xl mb-5 ">
              To choose your trending job dream & to make future bright.
            </p>
            <div className="">
              <Link to="jobsroute">
                <button className="banner-button">Browse Jobs</button>
              </Link>
            </div>
          </div>
          <div>
            <div className="grid md:grid-cols-2  lg:gap-5 gap-2 text-center lg:my-10 ">
              <Work
                titles={"Account Create"}
                icon={<FaUser className="text-4xl my-2" />}
                description={
                  "Create a account as Employer or a Candidate for free."
                }
              />
              <Work
                titles={"Find Jobs"}
                icon={<FaSearch className="text-4xl my-2" />}
                description={
                  "Browse throught positions to find the right job for you."
                }
              />
              <Work
                titles={" Apply Jobs"}
                icon={<FaPaperPlane className="text-4xl my-2" />}
                description={
                  "Apply to a job with your resume and change your Career."
                }
              />
              <Work
                titles={"Job Notifications"}
                icon={<BsBellFill className="text-4xl my-2" />}
                description={
                  " Gain a business in the most advanced IoT solutions."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseWork;
