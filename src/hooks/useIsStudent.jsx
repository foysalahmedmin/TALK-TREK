import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useIsStudent = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, isLoading : isStudentLoading, error, data : isStudent } = useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`http://localhost:5000/user/isStudent/${user?.email}`);
            return res.data.student;
        }
    })

    return [refetch, isStudentLoading, error, isStudent]
};

export default useIsStudent;