import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ClassSkeletonCard from "../../../components/Loaders/ClassSkeletonCard";
import ClassCard from "../../Shared/ClassCard/ClassCard";

const RelatedClass = ({ category, id }) => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        if (category) {
            axios.get(`https://talk-trek-server.vercel.app/relatedClass/${category}`)
                .then(result => {
                    const classes = result.data
                    const filter = classes?.filter(product => product._id !== id)
                    setClasses(filter)
                })
        }
    }, [category, id])
    return (
        <>
            {
                classes.length && <section className="py-10">
                    <div className="container">
                        <div data-aos="fade-up">
                            <div>
                                <SectionTitle
                                    heading={"Related Classes"}
                                    subheading={""}
                                />
                            </div>
                            <div className="grid md:grid-cols-3 gap-5">
                                {
                                    classes?.slice(0, 6).map(classItem => <ClassCard key={classItem._id} classItem={classItem} />)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    );
};

export default RelatedClass;