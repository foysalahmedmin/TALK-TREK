import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, isLoading: allClassesLoading, error, data: allClasses = [] } = useQuery({
        queryKey: ['allClasses', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('TalkTrekToken'),
        queryFn: async () => {
            const res = await axiosSecure.get(`/admin/allClasses/${user?.email}`);
            return res.data;
        }
    })

    return [allClasses, allClassesLoading, refetch, error]
};

export default useAllClasses;