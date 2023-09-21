import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CareerTab() {
  let [categories] = useState({
    Step1: [
      {
        id: 1,
        title: "Set Up Your Profile All",
        details:
          "After signing up to TechCareer, you start to set up your profile and find the hottest & latest tech jobs.",
        image: "https://i.ibb.co/PMsYbX6/step-1.png",
      },
    ],
    Step2: [
      {
        id: 2,
        title: "Create A Pro CV",
        details:
          "Techcareer gives you more than 500 pre-made CV samples for candidates to personalize their CVs.",
        image: "https://i.ibb.co/TWZn8Vd/step-2.png",
      },
    ],
    Step3: [
      {
        id: 3,
        title: "Get Applied",
        details:
          "When owning a CV, don't hesitate to submit your CV to easily apply for a job from Tech companies.",
        image: "https://i.ibb.co/5R7bq8h/step-3.png",
      },
    ],
  });

  return (
    <div className="w-full my-8 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                  "ring-white ring-opacity-60 ring-offset-2 ring-offset-[#09867E] focus:outline-none focus:ring-2",
                  selected
                    ? "bg-[#09867E] text-white shadow"
                    : "text-black dark:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                "rounded-xl bg-white dark:bg-[#121928] p-3",
                "ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2"
              )}
            >
              <ul>
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="relative banner text-black flex flex-col justify-center items-center lg:px-10 py-12 px-3 mt-12 rounded-md  space-y-6 "
                  >
                    <button className="border-2 border-gray-600 rounded-full absolute md:-top-8 -top-6  md:w-16 w-12 h-12 md:h-16 bg-white text-center text-xl font-bold">
                      {post.id}
                    </button>
                    <img src={post.image} alt="images" />
                    <h3 className="md:text-2xl text-lg font-bold">
                      {post.title}
                    </h3>
                    <p className="md:text-lg text-center">{post.details}</p>
                  </div>
                ))}
              </ul>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
