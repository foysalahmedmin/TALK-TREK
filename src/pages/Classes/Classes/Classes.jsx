import { useState } from "react";
import ClassSkeletonCard from "../../../components/Loaders/ClassSkeletonCard";
import PageBanner from "../../../components/PageBanner/PageBanner";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "../../Shared/ClassCard/ClassCard";

const Classes = () => {
    const [refetch, classLoading, error, classes] = useClasses('popularClasses')
    const [showCount, setShowCount] = useState(6)
    return (
        <>
            <PageBanner title={"Classes"} summary={ "Improve fluency with LanguageQuest! Our classes offer a direct path to language mastery. From beginner to advanced, our expert instructors and immersive approach ensure rapid progress. Join LanguageQuest today and reach your language goals faster than ever before!" } />
            <section className="py-10">
            <div className="container">
                <div>
                    <SectionTitle
                        heading={"Our Classes"}
                        subheading={"Embark on a language learning adventure with our classes. From beginner-friendly introductions to immersive conversation practice. Join us today and start your journey to linguistic proficiency!"}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        classLoading ? <ClassSkeletonCard cardCount={6} /> :
                        classes?.slice(0, showCount).map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
                    }
                </div>
                <div className="text-center mt-5">
                    {
                        (classes?.length > 6 && classes?.length >= showCount ) && <button onClick={() => setShowCount(showCount + 6)} className="primary-btn">See More Classes</button>
                    }
                </div>
            </div>

        </section>
        </>
    );
};

export default Classes;