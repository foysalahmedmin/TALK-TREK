import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import authImg from "../../assets/AuthImage.svg"
import Social from "../Shared/Social/Social";
import axios from "axios";
import Swal from "sweetalert2";

const SignUp = () => {
    const navigate = useNavigate()
    const { SignUp, UpdateProfile } = useAuth()
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data.mainPassword !== data.confirmPassword) {
            setError("confirmPassword", {
                type: "validate",
                message: "Check Again Your Password and Confirm Password"
            })
        } else {
            SignUp(data?.email, data?.mainPassword)
                .then(result => {
                    const createdUser = result.user
                    if (createdUser) {
                        axios.post(`http://localhost:5000/user/${data.email}`, {
                            Name: data.name,
                            Email: data.email,
                            Image: data.photoUrl,
                            Role: 'student'
                        })
                            .then(result => {
                                console.log(result)
                            })

                        navigate('/', { replace: true })
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Signed-Up Successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        UpdateProfile(createdUser, data?.name, data?.photoUrl)
                            .then(updateResult => {
                                reset()
                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                console.log(errorMessage)
                            });
                    }

                })


        }

    }

    return (
        <section className={`min-h-screen`}>
            <div className="container pt-16">
                <div className="hero py-10 min-h-screen items-center">
                    <div className="hero-content flex-col lg:flex-row-reverse shadow-2xl">
                        <div className="text-center lg:text-left">
                            <img src={authImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h1 className="text-center font-bold text-2xl">
                                SIGN-UP
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} placeholder="Name" name="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" {...register("photoUrl", { required: true })} placeholder="Photo Url" name="photoUrl" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} placeholder="email" name="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("mainPassword", {
                                        required: true,
                                        pattern: {
                                            value: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z])(?=.*\d).{6,}$/,
                                            message: 'Password must be spacial at least a spacial character and capital latter'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Password must be at least 6 characters long'
                                        }
                                    })} placeholder="Password" name="mainPassword" className="input input-bordered" required />
                                    {errors.mainPassword && <span>{errors.mainPassword.message}</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Confirm Password</span>
                                    </label>
                                    <input type="password" {...register("confirmPassword", { required: true })} placeholder="Confirm Password" name="confirmPassword" className="input input-bordered" required />
                                    {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className="primary-btn" />
                                </div>
                            </form>
                            <p className='text-secondary text-center'>
                                Already registered? <Link to='/signIn' className='text-primary'>Go to SignIn.</Link>
                            </p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;