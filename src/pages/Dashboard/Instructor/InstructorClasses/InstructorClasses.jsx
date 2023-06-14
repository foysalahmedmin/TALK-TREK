import { useState } from "react";
import useInstructorClasses from "../../../../hooks/useInstructorClasses";
import InstructorClassesTR from "./InstructorClassesTR";

const InstructorClasses = () => {
    const [instructorClasses, instructorClassesLoading, refetch, error] = useInstructorClasses()
    const [feedback, setFeedback] = useState({})
    const showFeedback = (feedbackMessage) => {
        setFeedback(feedbackMessage)
        window.my_modal_3.showModal()
    }
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Enrolled-Student</th>
                            <th className="text-center">Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instructorClasses.map(classItem => <InstructorClassesTR key={classItem._id} classItem={classItem} refetch={refetch} showFeedback={showFeedback} />)
                        }
                    </tbody>

                </table>
            </div>
            <dialog id="my_modal_3" className="modal">
                <form method="dialog" className="modal-box">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <h3 className="font-bold text-xl uppercase text-center">{feedback.className}</h3>
                    <p className="mb-5 text-center">ClassID: {feedback._id}</p>
                    {
                        feedback.feedback? <div>
                            <p className="font-bold uppercase">Admin Feedback:</p>
                            <p>{feedback.feedback}</p>
                        </div> 
                        : <p className="text-center">There Have No FeedBack</p>
                    }
                </form>
            </dialog>
        </div>
    );
};

export default InstructorClasses;