import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";
import useAxioSequre from "./useAxiosSequre";
import { useContext } from "react";

const useSelfPostfindEmail = () => {

    const {user} = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: selfposts = [], refetch } = useQuery(['selfposts'], async () => {
        const res = await axiosSequre.get(`/selfpost?=${user?.email}`)
        return res.data;
    })
    console.log()
    return [selfposts,refetch]
};

export default useSelfPostfindEmail;