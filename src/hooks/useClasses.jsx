import {useQuery} from '@tanstack/react-query'

const useClasses = (sort) => {
    const { refetch, isLoading : classLoading, error, data : classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes?sort=${sort}`);
            return res.json();
        } 
    })

    return [refetch, classLoading, error, classes]
};

export default useClasses;