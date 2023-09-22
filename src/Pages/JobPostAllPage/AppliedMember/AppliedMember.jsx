import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { FaUserAlt } from "react-icons/fa";
const AppliedMember = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();

  const { data: appliedmember = [] } = useQuery(
    ["appliedmember", user?.email], async () => {
      const res = await axiosSequre.get(`/jobsapply/${user?.email}`);
      return res.data;
    });
  console.log(appliedmember);
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="py-5 px-5">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="uppercase  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <th>Company Logo</th>
                  <th>Company Name</th>
                  <th>Job Title & Category</th>
                  <th>Location & Workplace</th>
                  <th>Post Date</th>
                  <th>Position</th>
                  <th>Salary</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                {appliedmember?.map((posts) => (
                  <tr
                    key={posts._id}
                    className="dark:bg-white dark:text-black dark:border-red-950"
                  >
                    <td>
                      {
                        posts?.companyphoto ? <img
                          className="w-12 h-12 rounded-md"
                          src={posts?.companyphoto}
                          alt="img"
                        /> : <FaUserAlt className="w-12 h-12 bg-gray-400 p-1 rounded-full"></FaUserAlt>
                      }
                    </td>
                    <td>{posts?.companyName}</td>
                    <td>
                      {posts?.jobTitle} <br />
                      {posts?.jobCategory}
                    </td>
                    <td>
                      Canada{posts?.location} & {posts?.workplace}
                    </td>
                    <td>{posts?.postDate}</td>
                    <td>Front-End{posts?.position}</td>
                    <td>${posts?.salary}</td>
                    <td>
                      <a
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <h1
                          className=" text-white hover:shadow-md px-3 py-1 rounded-md hover:border-purple-700 border 
                        bg-green-600 text-center hover:bg-blue-800  duration-300   bg-gradient-to-r from-green-700 to-blue-700   hover:from-blue-900 hover:to-purple-900 transition-all"
                        >
                          R/Join
                        </h1>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedMember;
