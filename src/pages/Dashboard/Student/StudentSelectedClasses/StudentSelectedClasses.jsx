import useMySelectedClasses from "../../../../hooks/useMySelectedClasses";
import StudentSelectedClassesTR from "./StudentSelectedClassesTR";

const StudentSelectedClasses = () => {
    const [selectedClasses, selectedClassesLoading, refetch, error] = useMySelectedClasses()
    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Class</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedClasses.map(classItem => <StudentSelectedClassesTR key={classItem._id} classItem={classItem} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default StudentSelectedClasses;