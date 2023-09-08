import React from "react";
import { FcDocument, FcKey } from "react-icons/fc";
import { LuFileSearch } from "react-icons/lu";
import { GiSecretBook, GiSettingsKnobs } from "react-icons/gi";

const JobGuidance = () => {
  return (
    <div className="lg:mx-12 mx-4">
      <h1 className="text-center font-bold text-4xl text-blue-800 dark:text-white my-5">
        Essential Job Search Tips
      </h1>
      <div className="space-y-2">
        <h1 className="font-bold text-3xl">What you need to know?</h1>
        <p className="text-lg">
          Many young people, particularly those from poor and disadvantaged
          backgrounds, struggle to find stable employment because they lack
          guidance and information on the demands of the labor market. They
          include those who are attempting to move from farm to off-farm
          employment in order to earn more and diversify their sources of
          income.
        </p>
        <p className="text-lg">
          One way to improve labor market outcomes for young people is to
          provide them with career guidance and employment services.
        </p>
      </div>
      <div className=" text-center text-white py-9 mt-5 px-6 rounded-md   duration-300 w-full   bg-gradient-to-r font-semibold   from-blue-700 to-purple-900 transition-all">
        <p className="text-lg">What you need to know?</p>
        <h1 className="text-2xl font-semibold">
          Careerer Guidance $ Job Guidance!
        </h1>
      </div>
      <div className="mt-10 text-lg space-y-5 divide-y divide-green-500">
        <div className="lg:flex items-center gap-3">
          <div className="lg:w-[145px] lg:mb-0 mb-2 h-20 lg:rounded-full rounded-md border border-blue-500 bg-gray-200 flex items-center justify-center">
            <FcDocument className="text-gray-600 text-6xl" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Create a Strong Profile</h1>
            <p>
              Your profile is your digital resume. Make it shine with a
              professional photo, a catchy headline, and a compelling summary
              that highlights your skills and experiences.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center gap-3 py-3">
          <div className="lg:w-[135px] lg:mb-0 mb-2 h-20 lg:rounded-full rounded-md border border-blue-500 bg-gray-200 flex items-center justify-center">
            <LuFileSearch className="text-gray-600 text-6xl" />
          </div>

          <div>
            <h1 className="font-bold text-lg">Job Search Strategies</h1>
            <p>
              Explore job listings, connect with professionals, and follow
              companies. Customize your applications and make the most of
              networking opportunities.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center gap-3 py-3">
          <div className="lg:w-[140px] lg:mb-0 mb-2 h-20 lg:rounded-full rounded-md border border-blue-500 bg-gray-200 flex items-center justify-center">
            <GiSettingsKnobs className="text-gray-600 text-6xl" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Effective Applications</h1>
            <p>
              Tailor your applications for each job. Showcase your
              qualifications, skills, and enthusiasm for the role. A
              well-crafted cover letter can make a difference.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center gap-3 py-3">
          <div className="lg:w-32 h-20 lg:mb-0 mb-2 lg:rounded-full rounded-md border border-blue-500 bg-gray-200 flex items-center justify-center">
            <FcKey className="text-gray-600 text-6xl" />
          </div>

          <div>
            <h1 className="font-bold text-lg"> Interview Success</h1>
            <p>
              Prepare for interviews by researching the company, practicing
              common questions, and showcasing your qualifications. First
              impressions matter.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center gap-3 py-3">
          <div className="lg:w-56 lg:mb-0 mb-2 h-20 border border-blue-800 rounded-md lg:rounded-full bg-gray-200 flex items-center justify-center">
            <GiSecretBook className="text-gray-600 text-6xl" />
          </div>
          <div>
            <h1 className="font-bold text-lg">Seek Feedback</h1>
            <p>
              Don't be afraid to seek feedback from mentors or peers.
              Constructive criticism can help you improve your job search
              strategy. These titles and descriptions provide concise job seeker
              guidance, focusing on essential aspects of finding and securing a
              job.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobGuidance;
