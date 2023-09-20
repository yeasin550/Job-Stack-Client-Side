import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useCompany = () => {
  const { user} = useContext(AuthContext);
  const [axiosSecure] = useAxioSequre();
  const { data: isCompany, isLoading: isCompanyLoading } = useQuery({
    queryKey: ["isCompany", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/company/${user?.email}`);
      return res.data.company;
    },
  });
  console.log(isCompany);
  return [isCompany, isCompanyLoading];
};
export default useCompany;