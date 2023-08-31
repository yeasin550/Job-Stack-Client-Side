import React, { useContext } from 'react';
import useAxioSequre from './useAxiosSequre';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useEducation = () => {
    const { user } = useContext(AuthContext);
    const [axiosSequre] = useAxioSequre();
    const { data: userEducations = [], refetch } = useQuery(['userEducations'], async () => {
        const res = await axiosSequre.get(`/education/${user?.email}`)
        return res.data;
    })
    return [userEducations, refetch]
};

export default useEducation;