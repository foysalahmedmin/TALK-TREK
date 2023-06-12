import { FaCreditCard } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const StudentSelectedClassesTR = ({ classItem, refetch }) => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { _id, classId, className, classImage, classCategory, price, startingDate, instructorName, instructorEmail, studentEmail, } = classItem;
    const deleteHandler = () => {
        Swal.fire({
            title: 'Sure To Delete?',
            text: "Are you sure to delete this selected Class!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8dc63f',
            cancelButtonColor: '#1975bb',
            confirmButtonText: 'Yes, Delete!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/student/deleteClass/${_id}?email=${user?.email}`)
                    .then(result => {
                        console.log(result.data)
                        if (result.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Delete',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

            }
        })

    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={classImage} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                        <div className="text-sm opacity-50">{classCategory}</div>
                        <div className="text-sm opacity-50">{startingDate}</div>
                    </div>
                </div>
            </td>
            <td>
                <div className="font-bold">{instructorName}</div>
                <p>{instructorEmail}</p>
            </td>
            <th>
                <button className="font-bold">${price}</button>
            </th>
            <th >
                <div className="text-center h-full flex justify-center items-center flex-wrap gap-1">
                    <Link to={`/dashboard/student/payment/${_id}`}><button className="primary-btn-sm"><FaCreditCard /></button></Link>
                    <button onClick={deleteHandler} className="secondary-btn-sm"><RiDeleteBack2Fill /></button>
                </div>
            </th>
        </tr>
    );
};

export default StudentSelectedClassesTR;