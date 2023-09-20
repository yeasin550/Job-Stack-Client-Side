import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useAdmin = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxioSequre();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  console.log(isAdmin);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
