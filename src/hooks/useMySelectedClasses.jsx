import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useMySelectedClasses = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : selectedClassesLoading, error, data : selectedClasses = [] } = useQuery({
        queryKey: ['selectedClasses', user?.email],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/student/selectedClasses/${user?.email}`);
            return res.data;
        }
    })

    return [selectedClasses, selectedClassesLoading, refetch,  error ]
}

export default useMySelectedClasses;