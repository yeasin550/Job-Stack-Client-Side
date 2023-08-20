import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";

const useSelfPost = () => {
    const [axiosSequre] = useAxioSequre();
    const { data: selfposts = [], refetch } = useQuery(['selfposts'], async () => {
        const res = await axiosSequre.get('/selfpost')
        return res.data;
    })
    return [selfposts, refetch]
};

export default useSelfPost;