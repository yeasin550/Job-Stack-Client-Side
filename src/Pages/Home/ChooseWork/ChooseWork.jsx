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
      <div className="bg-[#F1F7F4] max-w-screen-xl lg:mb-24 mb-10 mx-auto px-5 mt-6 lg:mt-28 ">
        <div className="grid md:grid-cols-2 gap-2 items-center">
          <div className="text-center ">
            <h1 className="lg:text-4xl text-2xl mb-3 mt-6 font-bold">Choose Your Work</h1>
            <p className="text-[#777] text-xl mb-5 ">
              Find jobs on the work that suits you the most.
            </p>
            <button className="btn text-white bg-green-500 hover:bg-black">
              View More Jobs
            </button>
          </div>
          <div>
            <div className="grid md:grid-cols-3  lg:gap-5 gap-2 text-center lg:my-10 ">
              <Work
                titles={"Register"}
                icon={<FaUser  className="text-4xl my-2"/>}
                description={
                  "Create a account as Employer or a Candidate for free."
                }
              />
              <Work
                titles={"Search"}
                icon={<FaSearch className="text-4xl my-2"/>}
                description={
                  "Browse throught positions to find the right job for you."
                }
              />
              <Work
                titles={" Apply Jobs"}
                icon={<FaPaperPlane className="text-4xl my-2"/>}
                description={
                  "Apply to a job with your resume and change your Career."
                }
              />
              <Work
                titles={"Creative Technologies"}
                icon={<FaMicrochip className="text-4xl my-2"/>}
                description={
                  " Gain a business in the most advanced IoT solutions."
                }
              />
              <Work
                titles={"Top Rated Companies"}
                icon={<FaThumbsUp className="text-4xl my-2"/>}
                description={
                  "Find The Best Top Rated Companies in your Local area."
                }
              />
              <Work
                titles={"24/7 Customer Support"}
                icon={<FaHeadset className="text-4xl  my-2"/>}
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
