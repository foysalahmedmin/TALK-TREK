import { HiCurrencyDollar, HiCalendarDays, HiClock, HiUserPlus } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useIsStudent from "../../../hooks/useIsStudent";

const Details = ({ singleClass }) => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const [isStudent] = useIsStudent()
    const { _id, className, classCategory, classImage, Seats, availableSeats, bookedSeats, instructorName, instructorEmail, instructorID, instructorImage, classDetails, classDuration, startingDate, price } = singleClass;
    const classAddHandler = () => {
        if (user) {
            axiosSecure.post(`student/selectClass/${user.email}`, {
                studentEmail: user.email,
                classId: _id,
                className,
                classImage,
                instructorName,
                instructorEmail,
                startingDate,
                price,
                classCategory,
            })
                .then(result => {
                    if (result.data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    } else if (result.data.message) {
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
                title: 'WANT TO SIGN-IN?',
                text: "If you want to select the class you have to sign-in!",
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
        <section className="py-10">
            <div className="container pt-16">
                <div className="hero items-center">
                    <div className="hero-content flex-col md:flex-row shadow-2xl">
                        <div className="text-center lg:text-left" data-aos="fade-right">
                            <img className="object-cover" src={classImage} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm" data-aos="fade-left">
                            <h1 className="uppercase text-3xl text-primary font-bold mb-1">{className}</h1>
                            <h3 className="text-xl font-bold">Instructor <span className="text-primary">{instructorName}</span></h3>
                            <p className="mb-3">{instructorEmail}</p>
                            <p className="mb-3">{classDetails}</p>
                            <p className="flex items-center gap-1"><HiUserPlus className="text-primary text-xl" /> <span className="font-bold">Available Seats:</span> <span>{availableSeats}</span></p>
                            <p className="flex items-center gap-1"><HiClock className="text-primary text-xl" /> <span className="font-bold">Duration:</span> <span>{classDuration}</span></p>
                            <p className="flex items-center gap-1"><HiCalendarDays className="text-primary text-xl" /> <span className="font-bold">Starting Date:</span> <span>{startingDate}</span></p>
                            <p className="flex items-center gap-1 mb-3"><HiCurrencyDollar className="text-primary text-xl" /> <span className="font-bold">Fee:</span> <span>{price} Dollar.</span></p>

                            <div>
                                <button disabled={(user && !isStudent) || (availableSeats < 1)} onClick={() => classAddHandler()} className="primary-btn w-full">Select Class</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;