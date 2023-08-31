import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "../../../Hooks/useAxiosSequre";

import { Link, useNavigate } from "react-router-dom";
import AppliedMemberJobDetails from "./AppliedMemberJobDetails";

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
                
                {
                    appliedmember?.map(posts => <AppliedMemberJobDetails key={posts._id} user={user} posts={posts}></AppliedMemberJobDetails>)
          }
        </div>
      </div>
    );
};

export default AppliedMember;
