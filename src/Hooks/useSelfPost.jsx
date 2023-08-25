import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";

const useSelfPost = () => {
    const [axiosSequre] = useAxioSequre();
    const { data: allselfdata = [], refetch } = useQuery(
      ["allselfdata"],
      async () => {
        const res = await axiosSequre.get("/selfpost");
        return res.data;
      }
    );
    return [allselfdata, refetch]
};

export default useSelfPost;