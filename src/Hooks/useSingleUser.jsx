import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import useAxioSequre from './useAxioSequre';
import { useQuery } from '@tanstack/react-query';
const useSingleUser = () => {
    const {user} = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: singleUser = [], refetch } = useQuery(['singleUser'], async () => {
        const res = await axiosSequre.get(`/users/${user?.email}`)
        return res.data;
    })
    console.log(singleUser);
   return [singleUser, refetch];
}
export default useSingleUser;