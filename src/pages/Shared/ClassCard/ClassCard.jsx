import { HiDocumentText } from "react-icons/hi";
import useAuth from "../../../hooks/useAuth";
import useIsStudent from "../../../hooks/useIsStudent";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ClassCard = ({ classItem }) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isStudent] = useIsStudent()
    const { _id, className, classImage, price, seats, availableSeats, instructorId, instructorName, instructorImage, classCategory } = classItem;
    const classAddHandler = () => {
        if (user) {
            axiosSecure.post(`/classSelect/${user.email}`, {
                studentEmail: user.email,
                classId: _id,
                className,
                classImage,
                instructorId,
                price,
                classCategory,
            })
            .then(result => {
                if(result.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Selected',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }else if(result.data.message){
                    Swal.fire({
                        position: 'center',
                        icon: 'warning',
                        title: `${result.data.message}`,
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        } else {
            Swal.fire({
                title: 'Want To Sign-In?',
                text: "If You want to select class you have to be signed-in!",
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
        <div className="rounded-md overflow-hidden shadow-xl">
            <div className="relative h-60">
                <img className="w-full h-full object-cover" src={classImage} alt="" />
                <div className="absolute top-0 h-full z-10 w-full bg-gradient-to-l from-black bg-opacity-50"></div>
                <p className="absolute z-20 top-5 left-5 bg-black rounded-md font-bold px-3 py-1 text-primary">${price}</p>
            </div>
            <img className="w-20 h-20 z-20 object-cover shadow-xl relative ml-auto mr-3 -mt-10 rounded-full" src={instructorImage} alt="" />
            <div className={`relative bg-base-300 -mt-10 p-3 ${availableSeats < 1 && 'bg-red-100'}`}>
                <p className="text-xs opacity-50">{classCategory}</p>
                <h1 className="text-primary font-semibold text-3xl">{className}</h1>
                <p className="uppercase mb-1">With {instructorName}</p>
                <div className="flex gap-5 mb-3">
                    <p>Seats: {seats}</p>
                    <p>Available: {availableSeats}</p>
                </div>
                <div className="flex gap-3">
                    <button disabled={(user && !isStudent) || (availableSeats < 1)} onClick={() => classAddHandler()} className="primary-btn flex-1">Select Class</button>
                    <button className="secondary-btn btn-circle"><HiDocumentText className="text-3xl" /></button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;