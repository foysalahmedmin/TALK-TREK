import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const InstructorClassUpdate = () => {
    const [theClass, setTheClass] = useState()
    const { id } = useParams()
    const [axiosSecure] = useAxiosSecure()
    const {className, price, availableSeats, bookedSeats, classDuration, startingDate, classDetails} = theClass
    useEffect(()=> {
        axiosSecure.get(`/instructor/instructorSingleClasses/${id}`)
        .then(result => {
            setTheClass(result.data)
        })
    }, [id])

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
                console.log(result.data)
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
                            <input defaultValue={price} type="number" min={0} {...register("price", { required: true })} placeholder="Class Price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input defaultValue={availableSeats} type="number" min={0} {...register("availableSeats", { required: true })} placeholder="Available Seats" name="availableSeats" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input defaultValue={+(classDuration.split(" ")[0]) * 7} type="number" min={0} {...register("classDuration")} placeholder="Class Duration Day" name="classDuration" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input defaultValue={new Date(startingDate)} type="date"  {...register("startingDate")} placeholder="Class Duration Day" name="startingDate" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <textarea defaultValue={classDetails} placeholder="Class Details" {...register("classDetails")} name="classDetails" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
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