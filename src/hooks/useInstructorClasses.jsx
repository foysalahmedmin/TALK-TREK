import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstructorClasses = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : instructorClassesLoading, error, data : instructorClasses = [] } = useQuery({
        queryKey: ['instructorClasses', user?.email],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/instructor/instructorClasses/${user?.email}`);
            return res.data;
        }
    })

    return [instructorClasses, instructorClassesLoading, refetch,  error ]
};

export default useInstructorClasses;