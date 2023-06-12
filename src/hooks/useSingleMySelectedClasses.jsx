import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useSingleMySelectedClasses = (id) => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : selectedSingleClassesLoading, error, data : selectedSingleClasses = {} } = useQuery({
        queryKey: ['selectedSingleClasses', user?.email, id],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/student/selectedSingleClasses/:${id}?email=${user?.email}`);
            return res.data;
        }
    })

    return [selectedSingleClasses, selectedSingleClassesLoading, refetch,  error ]
};

export default useSingleMySelectedClasses;