import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
    const {user, loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading : isAdminLoading, error, data : isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading && !! user?.email && !! localStorage.getItem('TalkTrekToken'),
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/isAdmin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading, refetch,  error]
};

export default useIsAdmin;