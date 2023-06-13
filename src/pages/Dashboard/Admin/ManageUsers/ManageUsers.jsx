import useAllUsers from "../../../../hooks/useAllUsers";
import ManageUsersTR from "./ManageUsersTR";

const ManageUsers = () => {
    const [allUsers, allUsersLoading, refetch, error] = useAllUsers()
    return (
        <div className="w-full">
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
                            allUsers.map(user => <ManageUsersTR key={user._id} user={user} refetch={refetch} />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;