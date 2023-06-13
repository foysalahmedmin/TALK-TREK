import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useIsStudent from './useIsStudent';

const usePaymentHistory = () => {
    const [isStudent] = useIsStudent()
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading: paymentHistoryLoading, error, data: paymentHistory = [] } = useQuery({
        queryKey: ['paymentHistory', user?.email],
        enabled: !loading && !!isStudent && !!user?.email && !!localStorage.getItem('TalkTrekToken'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/paymentHistory/${user?.email}`);
            return res.data;
        }
    })

    return [paymentHistory, paymentHistoryLoading, refetch, error]
};

export default usePaymentHistory;