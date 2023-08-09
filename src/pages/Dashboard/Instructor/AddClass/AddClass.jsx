import { useForm } from "react-hook-form";
import { BiImageAdd } from "react-icons/bi";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()
    const imageHostKey = import.meta.env.VITE_IMG_HOST_KEY
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
    const { user } = useAuth()
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const onSubmit = data => {
        const formData = new FormData()
        formData.append('image', data.image[0])
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const classImage = imgRes.data.display_url;
                    const { className, classCategory, instructorName, instructorEmail, price, availableSeats, classDuration, startingDate, classDetails } = data;
                    const postAbleClass = {
                        className,
                        classCategory,
                        classImage,
                        seats: +availableSeats,
                        availableSeats: +availableSeats,
                        bookedSeats: 0,
                        instructorID: null,
                        instructorName,
                        instructorImage: user?.photoURL,
                        instructorEmail,
                        classDetails,
                        classDuration: `${classDuration / 7} weeks`,
                        startingDate,
                        price: +price,
                        status: "pending"
                    }
                    axiosSecure.post(`/instructor/instructorAddClass/${user.email}`, postAbleClass)
                    .then(result => {
                        if(result.data.insertedId){
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Class Added Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/dashboard/instructorClasses', { replace: true })
                        }
                    })

                }
            })
    }
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className=" p-5">

                    <div className="flex gap-5 mb-5 items-center">
                        <div className="form-control flex-1">
                            <input type="text" {...register("className", { required: true })} placeholder="Class Name" name="className" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <select defaultValue={'Language Category'} {...register("classCategory")} name="classCategory" className="select select-bordered max-w-xs">
                                <option disabled>Language Category</option>
                                <option>Arabic</option>
                                <option>Bangla</option>
                                <option>English</option>
                                <option>Hindi</option>
                                <option>Urdu</option>
                                <option>Malay</option>
                                <option>Spanish</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label htmlFor="classImg" className="btn btn-outline">
                                <BiImageAdd className="text-xl" /> Add Image
                            </label>
                            <input type="file" {...register("image", { required: true })} id="classImg" name="image" className="input input-bordered hidden" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5">

                        <div className="form-control">
                            <input type="text" value={user.displayName} {...register("instructorName", { required: true })} placeholder="Instructor Name" name="instructorName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="email" value={user.email} {...register("instructorEmail", { required: true })} placeholder="Instructor Email" name="instructorEmail" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <input type="number" min={0} {...register("price", { required: true })} placeholder="Class Price" name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="number" min={0} {...register("availableSeats", { required: true })} placeholder="Available Seats" name="availableSeats" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input type="number" min={0} {...register("classDuration")} placeholder="Class Duration Day" name="classDuration" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="date"  {...register("startingDate")} placeholder="Class Duration Day" name="startingDate" className="input input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-5">
                        <textarea placeholder="Class Details" {...register("classDetails")} name="classDetails" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Post Class" className="primary-btn" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;