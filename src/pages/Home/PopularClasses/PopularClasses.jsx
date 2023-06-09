import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useClasses from "../../../hooks/useClasses";
import ClassCard from "./ClassCard";

const PopularClasses = () => {
    const [refetch, classLoading, error, classes] = useClasses('popularClasses')
    if(classLoading){
        return "ClassLoading....."
    }
    return (
        <section className="py-10">
            <div className="container">
                <div>
                    <SectionTitle
                        heading={"Popular Classes"}
                        subheading={"Embark on a language learning adventure with our popular classes. From beginner-friendly introductions to immersive conversation practice. Join us today and start your journey to linguistic proficiency!"}
                    />
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        classes.slice(0, 6).map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
                    }
                </div>
            </div>

        </section>
    );
};

export default PopularClasses;