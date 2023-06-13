import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useIsStudent = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : isStudentLoading, error, data : isStudent } = useQuery({
        queryKey: ['isStudent', user?.email, user],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/isStudent/${user?.email}`);
            return res.data.student;
        }
    })

    return [isStudent, isStudentLoading, refetch, error, ]
};

export default useIsStudent;