import { useState } from "react";
import useJobPost from "../../Hooks/useJobPost";
import { useNavigate, useParams } from "react-router-dom";

const EveryOneSerchJob = () => {
  const [active, setActive] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [jobposts] = useJobPost();
  console.log(jobposts);

  const { id } = useParams();

  const navigate = useNavigate();

  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    return (newVal = ["All", ...new Set(newVal)]);
  };

  const categoryOnlyData = getUniqueData(jobposts, "jobCategory");
  const handleFilter = (posts) => {
    if (searchText) {
      if (posts?.jobTitle?.toLowerCase()?.includes(searchText?.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    } else return true;
  };

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-24">
      <h1 className="lg:text-5xl text-3xl text-center my-8">
        Find Your Career. You Deserve it.
      </h1>
      {/* job category ways filter */}
      <form className="flex justify-center items-center mt-10 mb-20 md:flex-row gap-3 ">
        <div
          className="flex w-full lg:w-1/3 
                 relative"
        >
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            type="text"
            placeholder="Search your jobs title"
            className="w-full md:w-full px-3  h-12 rounded-md dark:text-black border-2 border-blue-500 focus:outline-none focus:blue-green-700"
          />
        </div>
        <div>
          <select
            id="jobCategory"
            name="jobCategory"
            className="h-12 w-full border-2 cursor-pointer border-blue-500 dark:text-black focus:outline-none focus:blue-green-500 rounded px-2 md:px-2 py-0 md:py-1 tracking-wider"
            onChange={(e) => setActive(e.target.value)}
            value={active}
          >
            {categoryOnlyData.map((category, index) => (
              <option value={category} key={index}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </form>

      {/* job data display */}
      {jobposts ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center  py-10">
          {jobposts
            .filter(handleFilter)
            .filter((post) => {
              if (active === "All") {
                return true;
              }
              return post.jobCategory === active;
            })
            .map((posts) => (
              <div
                key={posts._id}
                className="w-full dark:text-black bg-base-100 search-card categorires-card rounded-md px-5  py-5"
              >
                <div>
                  <div className="flex justify-start gap-5 items-center">
                    <div className="boreder p-[2px] bg-cyan-400 rounded ">
                      <img
                        onClick={() => navigate(`/dynamicprofile/${id}`)}
                        className="w-16  h-16"
                        src={posts?.image}
                        alt="companylogo"
                      />
                    </div>
                    <div>
                      <p className="text-[20px] uppercase  font-bold font-sans">
                        {posts?.companyName}
                      </p>
                      <p className="text-green-500 ">{posts?.location}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-[20px] text-gray-500 font-thin mt-2 mb-1">
                      {posts?.jobTitle}
                    </h2>
                    <h5 className=" text-blue-500">{posts?.workplace}</h5>
                    <h6 className="my-2 ">HTML, CSS, JavaScript, React</h6>
                    <div>
                      <div className="flex  justify-between items-center">
                        <div>
                          <h1>
                            ${posts?.salary}/
                            <span className="text-xs">monthly</span>
                          </h1>
                        </div>
                        <div>
                          <button
                            onClick={() => navigate(`/dynamic/${posts?._id}`)}
                            className="btn btn-sm border hover:bg-[#09867E] hover:text-white border-cyan-300 "
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p>LOding,,,,,,</p>
      )}
    </div>
  );
};

export default EveryOneSerchJob;
