import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import useAxioSequre from "./useAxiosSequre";

const useSelfPostfindEmail = () => {

    const { user} = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { refetch, data: singleSelfPost = [] } = useQuery({
        queryKey: ['singleSelfPost', user?.email],
        queryFn: async () => {
            const res = await axiosSequre(`/selfpost?email=${user?.email}`)
            return res.data;
        },
    })

    return [singleSelfPost, refetch]
};


export default useSelfPostfindEmail;