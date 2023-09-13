import { useContext } from "react";
import useAxioSequre from "./useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
const getBookMarkJobs = () => {
  const { user } = useContext(AuthContext);
  const [axiosSequre] = useAxioSequre();
  const { data: bookMarkJobs = [] } = useQuery(["bookMarkJobs", user?.email],
    async () => {
      const res = await axiosSequre.get(`bookMarkJobs/${user?.email}`);
      return res.data;
    }
  );
  // console.log(bookMarkJobs)
  return [bookMarkJobs];
};
export default getBookMarkJobs;
