import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useIsStudent from "../../../hooks/useIsStudent";
import { useEffect, useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineMinusSquare } from "react-icons/ai";

const InstructorCard = ({ instructorItem, refetch }) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [isStudent] = useIsStudent()
    const [isFollow, setIsFollow] = useState()
    const { _id, Name, Image, Email, Role, TotalBookedSeats, ApprovedClassesId, FollowersEmail } = instructorItem;
    useEffect(() => {
        if (user) {
            const isFollow = FollowersEmail?.includes(user.email)
            setIsFollow(isFollow)
        }
    }, [user, FollowersEmail])

    const followHandler = (orFollow) => {
        if (user) {
            if (orFollow == 'follow') {
                axiosSecure.post(`follow/${user.email}?instructorEmail=${Email}`, {
                    studentEmail: user.email,
                    instructorName: Name,
                    instructorEmail: Email,
                    instructorID: _id,
                })
                    .then(result => {
                        if (result.data?.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `Following Start`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            } else if (orFollow == 'unfollow') {
                axiosSecure.patch(`unfollow/${user.email}?instructorEmail=${Email}`, {
                    instructorEmail: Email
                })
                    .then(result => {
                        if (result.data?.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `Unfollow Successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })
            }
        } else {
            Swal.fire({
                title: 'Want To Sign-In?',
                text: "If You want to follow this instructor you have to be signed-in!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#8dc63f',
                cancelButtonColor: '#1975bb',
                confirmButtonText: 'Yes, Sign-In!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn')
                }
            })
        }
    }
    return (
        <div className="rounded-mb overflow-hidden">
            <div className="h-80">
                <img className="h-full w-full object-cover" src={Image} alt="" />
            </div>
            <div className='relative bg-base-300 p-3 text-center'>
                <p className="text-xs opacity-50">{Role}</p>
                <h1 className="text-primary font-semibold text-3xl">{Name}</h1>
                <p className="text-xs text-secondary mb-3">{Email}</p>
                <p>Classes: {ApprovedClassesId?.length}</p>
                <p>Total Students: {TotalBookedSeats}</p>
                {
                    (user) ? (!isFollow) ?
                        <button disabled={user && !isStudent} onClick={() => followHandler('follow')} className="primary-btn w-full mt-3"><BiAddToQueue />Follow</button>
                        : <button disabled={user && !isStudent} onClick={() => followHandler('unfollow')} className="primary-btn w-full mt-3"><AiOutlineMinusSquare /> Unfollow</button>
                        : <button disabled={user && !isStudent} onClick={() => followHandler()} className="primary-btn w-full mt-3">Follow</button>
                }
            </div>
        </div>
    );
};

export default InstructorCard;