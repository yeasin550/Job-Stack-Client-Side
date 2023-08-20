import { useQuery } from "@tanstack/react-query";
import useAxioSequre from "./useAxiosSequre";

const useJobPost = () => {
    const [axiosSequre] = useAxioSequre();
    const { data: jobposts = [], refetch } = useQuery(['jobposts'], async () => {
        const res = await axiosSequre.get('/job')
        return res.data;
    })
    return [jobposts, refetch]
};

export default useJobPost;