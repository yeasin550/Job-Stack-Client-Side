import { useContext } from "react";
import SingleRequestCard from "./SingleRequestCard";
import AuthProvider, { AuthContext } from "../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "../../Hooks/useAxiosSequre";

//
const ConfirmRequset = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const { refetch, data: allConnectRequest = [] } = useQuery({
    queryKey: ["allConnectRequest", user?.email],
    queryFn: async () => {
      const res = await axiosSequre(`/connectrequest?email=${user?.email}`);
      return res.data;
    },
  });

  const allRequest = allConnectRequest.filter(
    (accept) => accept.status === "pending"
  );

  return (
    <div>
      <h1 className="my-3">
        Total Connection Request : <b>{allRequest.length}</b>{" "}
      </h1>
      <div className="grid px-5 gap-2 lg:grid-cols-4 pb-8 max-h-[650px] overflow-y-auto scroll-pr-2  touch-none">
        {allRequest.map((data) => (
          <SingleRequestCard data={data} key={data._id} refetch={refetch} />
        ))}
      </div>
    </div>
  );
};

export default ConfirmRequset;
