import React from "react";
import {
  FaHeadset,
  FaMicrochip,
  FaPaperPlane,
  FaSearch,
  FaThumbsUp,
  FaUser,
} from "react-icons/fa";
import Work from "./work";

const ChooseWork = () => {
  return (
    <div>
      <div className="bg-[#F1F7F4] max-w-screen-xl mx-auto px-5 mt-28 ">
        <div className="grid md:grid-cols-2 gap-5 items-center">
          <div className="text-center ">
            <h1 className="text-4xl mb-3 font-bold">Choose Your Work</h1>
            <p className="text-[#777] text-xl mb-5 ">
              Find jobs on the work that suits you the most.
            </p>
            <button className="btn text-white bg-green-500 hover:bg-black">
              View More Jobs
            </button>
          </div>
          <div>
            <div className="grid md:grid-cols-3 gap-5 text-center my-10 ">
              <Work
                titles={"Register"}
                icon={<FaUser />}
                description={
                  "Create a account as Employer or a Candidate for free."
                }
              />
              <Work
                titles={"Search"}
                icon={<FaSearch />}
                description={
                  "Browse throught positions to find the right job for you."
                }
              />
              <Work
                titles={" Apply Jobs"}
                icon={<FaPaperPlane />}
                description={
                  "Apply to a job with your resume and change your Career."
                }
              />
              <Work
                titles={"Creative Technologies"}
                icon={<FaMicrochip />}
                description={
                  " Gain a business in the most advanced IoT solutions."
                }
              />
              <Work
                titles={"Top Rated Companies"}
                icon={<FaThumbsUp />}
                description={
                  "Find The Best Top Rated Companies in your Local area."
                }
              />
              <Work
                titles={"24/7 Customer Support"}
                icon={<FaHeadset />}
                description={
                  " self-service banking extending cash in you band."
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
