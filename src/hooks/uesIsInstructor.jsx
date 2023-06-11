import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const uesIsInstructor = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, isLoading : isInstructorLoading, error, data : isInstructor } = useQuery({
        queryKey: ['isInstructor', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/isInstructor/${user?.email}`);
            return res.data.instructor;
        }
    })

    return [refetch, isInstructorLoading, error, isInstructor]
};

export default uesIsInstructor;