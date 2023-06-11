import {useQuery} from '@tanstack/react-query'

const useInstructors = (sort) => {
    const { refetch, isLoading : instructorsLoading, error, data : instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/instructors?sort=${sort}`);
            return res.json();
        } 
    })
    return [instructors, instructorsLoading, refetch,  error ]
};

export default useInstructors;