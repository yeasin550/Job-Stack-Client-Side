import { useQuery } from '@tanstack/react-query';
import useAxioSequre from './useAxiosSequre';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const useWorkExperians = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: workexperians = [], refetch } = useQuery(['workexperians'], async () => {
        const res = await axiosSequre.get(`/works/${user?.email}`)
        return res.data;
    })
    return [workexperians,refetch];
};

export default useWorkExperians;