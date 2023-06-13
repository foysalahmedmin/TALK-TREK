import useMyEnrolledClasses from "../../../../hooks/useMyEnrolledClasses";
import StudentEnrolledClassesTR from "./StudentEnrolledClassesTR";

const StudentEnrolledClasses = () => {
    const [enrolledClasses, enrolledClassesLoading, refetch, error] = useMyEnrolledClasses()
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>PaymentId</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            enrolledClasses.map(classItem => <StudentEnrolledClassesTR key={classItem._id} classItem={classItem} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentEnrolledClasses;