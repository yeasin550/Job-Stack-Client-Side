import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";

const useNotificationFindEmail = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: singlenotify = [], refetch } = useQuery(['singlenotify', user?.email], async () => {
        const res = await axiosSequre.get(`/notification/${user?.email}`)
        return res.data;
    })
    console.log(singlenotify);

    return [singlenotify, refetch];
};

export default useNotificationFindEmail;
