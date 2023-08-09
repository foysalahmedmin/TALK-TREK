import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const InstructorClassUpdate = () => {
    const navigate = useNavigate()
    const [theClass, setTheClass] = useState({})
    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    const { className, price, availableSeats, bookedSeats, classDuration, startingDate, classDetails } = theClass;
    const [durationDay, setDurationDay] = useState()
    useEffect(() => {
        axiosSecure.get(`/instructor/instructorSingleClasses/${id}`)
            .then(result => {
                setTheClass(result.data)
            })
    }, [id])
    useEffect(()=>{
        if (classDuration) {
            setDurationDay(+classDuration.split(' ')[0] * 7)
        }
    }, [classDuration])

    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { price, availableSeats, classDuration, startingDate, classDetails } = data;
        const updatedClass = {
            seats: +availableSeats + bookedSeats,
            availableSeats: +availableSeats,
            classDetails,
            classDuration: `${classDuration / 7} weeks`,
            startingDate,
            price: +price,
        }
        axiosSecure.put(`/instructor/instructorUpdateClass/${id}`, updatedClass)
            .then(result => {
                if(result.data.modifiedCount > 0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Successfully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/instructorClasses', { replace: true })
                }
            })
    }

    return (
        <div>
            <div className="text-center mb-5">
                <p>{className}</p>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" p-5">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-control">
                            <input  type="number" min={0} {...register("price", { required: true })} placeholder="Class Price" name="price" className="input input-bordered" defaultValue={price} required />
                        </div>
                        <div className="form-control">
                            <input  type="number" min={0} {...register("availableSeats", { required: true })} placeholder="Available Seats" name="availableSeats" className="input input-bordered" defaultValue={availableSeats} required />
                        </div>
                        <div className="form-control">
                            <input  type="number" min={0} {...register("classDuration")} placeholder="Class Duration Day" name="classDuration" className="input input-bordered" defaultValue={durationDay} />
                        </div>
                        <div className="form-control">
                            <input  type="date"  {...register("startingDate")} placeholder="Class Duration Day" name="startingDate" className="input input-bordered" defaultValue={startingDate} />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <textarea  placeholder="Class Details" {...register("classDetails")} name="classDetails"  className="textarea textarea-bordered textarea-lg w-full" defaultValue={classDetails} ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Update Class" className="primary-btn" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default InstructorClassUpdate;