import {useQuery} from '@tanstack/react-query'

const useClasses = (sort) => {
    const { refetch, isLoading : classLoading, error, data : classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes?sort=${sort}`);
            return res.json();
        } 
    })

    return [classes, classLoading, refetch,  error ]
};

export default useClasses;