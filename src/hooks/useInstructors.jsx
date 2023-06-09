import {useQuery} from '@tanstack/react-query'

const useInstructors = (sort) => {
    const { refetch, isLoading : instructorsLoading, error, data : instructors = [] } = useQuery({
        queryKey: ['instructor'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/instructor?sort=${sort}`);
            return res.json();
        } 
    })
    return [refetch, instructorsLoading, error, instructors]
};

export default useInstructors;