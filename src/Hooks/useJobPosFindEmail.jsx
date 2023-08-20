import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxioSequre from "./useAxiosSequre";

const useJobPosFindEmail = () => {

    const {user} = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: jobposts = [], refetch } = useQuery(['jobposts'], async () => {
        const res = await axiosSequre.get(`/job?=${user?.email}`)
        return res.data;
    })
    console.log()
    return [jobposts,refetch]
};

export default useJobPosFindEmail;