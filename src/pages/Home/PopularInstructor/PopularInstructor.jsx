import useInstructors from "../../../hooks/useInstructors";

const PopularInstructor = () => {
    const [refetch, instructorsLoading, error, instructors] = useInstructors('popularInstructor')
    return (
        <section>
            
        </section>
    );
};

export default PopularInstructor;