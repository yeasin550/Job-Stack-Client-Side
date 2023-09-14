
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import useAxioSequre from "./useAxiosSequre";
import { useContext } from "react";

const useCompleteTask = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
      const { data: completeTask = [], refetch } = useQuery(
        ["completeTask", user?.email],
        async () => {
          const res = await axiosSequre.get(`assignment/${user?.email}`);
          return res.data;
        }
      );
    //   console.log(completeTask);
    return [completeTask, refetch];
};

export default useCompleteTask;
