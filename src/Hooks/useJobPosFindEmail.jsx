import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxioSequre from "./useAxiosSequre";

const useJobPosFindEmail = () => {
const {user} = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();

const { refetch, data: singlejobposts = [] } = useQuery({
        queryKey: ['singlejobposts', user?.email],
        queryFn: async () => {
            const res = await axiosSequre(`/job?email=${user?.email}`)
            return res.data;
        },
    })

    return [singlejobposts, refetch]
};

export default useJobPosFindEmail;