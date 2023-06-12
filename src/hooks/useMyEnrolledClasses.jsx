import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMyEnrolledClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading: enrolledClassesLoading, error, data: enrolledClasses = [] } = useQuery({
        queryKey: ['enrolledClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('TalkTrekToken'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/student/enrolledClasses/${user?.email}`);
            return res.data;
        }
    })

    return [enrolledClasses, enrolledClassesLoading, refetch, error]
};

export default useMyEnrolledClasses;