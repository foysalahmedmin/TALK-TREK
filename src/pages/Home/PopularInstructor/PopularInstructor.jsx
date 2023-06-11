import InstructorSkeletonCard from "../../../components/Loaders/InstructorSkeletonCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";

const PopularInstructor = () => {
    const [instructors, instructorsLoading] = useInstructors('popularInstructor')
    return (
        <section className="py-10">
            <div className="container">
                <div>
                    <SectionTitle
                        heading={"Popular Instructors"}
                        subheading={"Learn from the best! Our popular instructors are highly experienced and passionate about teaching languages. Join us and be inspired by our exceptional team of instructors!"}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        instructorsLoading ? <InstructorSkeletonCard cardCount={6} /> :
                        instructors.slice(0, 6).map(instructorItem => <InstructorCard key={instructorItem._id} instructorItem={instructorItem} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default PopularInstructor;