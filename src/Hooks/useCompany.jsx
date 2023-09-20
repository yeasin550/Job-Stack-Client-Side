import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxioSequre from "./useAxiosSequre";

const useCompany = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxioSequre();
  // use axios secure with react query
  const { data: isCompany, isLoading: isCompanyLoading } = useQuery({
    queryKey: ["isCompany", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/company/${user?.email}`);
      return res.data.company;
    },
  });
  return [isCompany, isCompanyLoading];
};
export default useCompany;