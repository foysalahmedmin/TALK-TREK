import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const uesIsInstructor = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : isInstructorLoading, error, data : isInstructor } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/isInstructor/${user?.email}`);
            return res.data.instructor;
        }
    })

    return [isInstructor, isInstructorLoading, refetch, error, ]
};

export default uesIsInstructor;