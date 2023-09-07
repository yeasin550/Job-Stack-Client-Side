import { useContext } from "react";
import useAxioSequre from "./useAxiosSequre";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
const useSingleUser = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: singleUser = [], refetch } = useQuery(['singleUser',user?.email], async () => {
        const res = await axiosSequre.get(`/users/${user?.email}`)
        return res.data;
    })
    return [singleUser, refetch];
};
export default useSingleUser;

