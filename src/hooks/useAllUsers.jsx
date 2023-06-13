import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllUsers = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading: allUsersLoading, error, data: allUsers = [] } = useQuery({
        queryKey: ['allUsers', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('TalkTrekToken'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/allUsers/${user?.email}`);
            return res.data;
        }
    })

    return [allUsers, allUsersLoading, refetch, error]
}

export default useAllUsers;