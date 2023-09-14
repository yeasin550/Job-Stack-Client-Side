import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioSequre from "./useAxiosSequre";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxioSequre();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
