import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "../../../Hooks/useAxiosSequre";
import { FiDelete } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";


const AppliedMember = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();

  const { data: appliedmember = [], refetch } = useQuery(
    ["appliedmember", user?.email],
    async () => {
      const res = await axiosSequre.get(`appliedmember/${user?.email}`);
      return res.data;
    }
  );
  console.log(appliedmember);
  return (
    <div>
      <div className="grid grid-cols-1">
        <div className="py-5 px-5">
          <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
              <thead>
                <tr className="uppercase  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  <th>Sl</th>
                  <th>Company Logo</th>
                  <th>Company Name</th>
                  <th>Job Title & Category</th>
                  <th>Location & Workplace</th>
                  <th>Post Date</th>
                  <th>Position</th>
                  <th>Salary</th>
                </tr>
              </thead>
              <tbody>
                {appliedmember?.map((posts, index) => (
                  <tr key={posts._id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        className="w-12 h-12 rounded-md"
                        src="https://img.freepik.com/free-vector/heart-logo_126523-587.jpg?w=740&t=st=1694020952~exp=1694021552~hmac=f9010928b59d497b8d6dcf2dbc0d9ec113f8859775377d674cf8e6b9a66f29c5"
                      />
                    </td>
                    <td>{posts?.companyName}</td>
                    <td>
                      {posts?.jobTitle} <br />
                      {posts?.jobCategory}
                    </td>
                    <td>Canada{posts?.location} & {posts?.workplace}</td>
                    <td>{posts?.postDate}</td>
                    <td>Front-End{posts?.position}</td>
                    <td>${posts?.salary}</td>
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
