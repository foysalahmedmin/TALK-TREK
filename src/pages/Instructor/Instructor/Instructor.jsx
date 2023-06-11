import { useState } from "react";
import InstructorSkeletonCard from "../../../components/Loaders/InstructorSkeletonCard";
import PageBanner from "../../../components/PageBanner/PageBanner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useInstructors from "../../../hooks/useInstructors";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";

const Instructor = () => {
    const [refetch, instructorsLoading, error, instructors] = useInstructors('popularInstructor')
    const [showCount, setShowCount] = useState(6)
    return (
        <>
            <PageBanner title={"Instructors"} summary={"Improve fluency with LanguageQuest! Our classes offer a direct path to language mastery. From beginner to advanced, our expert instructors and immersive approach ensure rapid progress. Join LanguageQuest today and reach your language goals faster than ever before!"} />
            <section className="py-10">
            <div className="container">
                <div>
                    <SectionTitle
                        heading={"Our Instructors"}
                        subheading={"Learn from the best! Our instructors are highly experienced and passionate about teaching languages. Join us and be inspired by our exceptional team of instructors!"}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        instructorsLoading ? <InstructorSkeletonCard cardCount={6} /> :
                        instructors.slice(0, 6).map(instructorItem => <InstructorCard key={instructorItem._id} instructorItem={instructorItem} />)
                    }
                </div>
                <div className="text-center mt-5">
                    {
                        (instructors?.length > 6 && instructors?.length >= showCount ) && <button onClick={() => setShowCount(showCount + 6)} className="primary-btn">See More instructors</button>
                    }
                </div>
            </div>

        </section>

        </>
    );
};

export default Instructor;