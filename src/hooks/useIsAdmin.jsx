import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useIsAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { refetch, isLoading : isAdminLoading, error, data : isAdmin } = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/user/isAdmin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [refetch, isAdminLoading, error, isAdmin]
};

export default useIsAdmin;