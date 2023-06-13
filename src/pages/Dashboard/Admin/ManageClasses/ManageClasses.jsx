import { useState } from "react";
import useAllClasses from "../../../../hooks/useAllClasses";
import ManageClassesTR from "./ManageClassesTR";
import FeedBack from "./FeedBack";
import TrSkeleton from "../../../../components/Loaders/TrSkeleton";

const ManageClasses = () => {
    const [allClasses, allClassesLoading, refetch, error] = useAllClasses()
    const [feedbackClass , setFeedbackClass] = useState({})
    const feedbackHandler = (feedbackClass) => {
        setFeedbackClass(feedbackClass)
        window.my_modal_3.showModal()
    }
    return (
        <div className="w-full">
            <FeedBack feedbackClass = {feedbackClass} />
            <div className="overflow-x-auto">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                            <th className="text-center">Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allClasses.map(classItem => <ManageClassesTR key={classItem._id} classItem={classItem} refetch={refetch} feedbackHandler={feedbackHandler} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageClasses;