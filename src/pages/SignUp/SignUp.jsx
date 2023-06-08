import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import authImg from "../../assets/AuthImage.svg"
import Social from "../Shared/Social/Social";

const SignUp = () => {
    const navigate = useNavigate()
    const { SignUp, UpdateProfile } = useAuth()
    const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        if (data?.password !== data?.confirmPassword) {
            setError('confirmPassword', { type: 'recheck', message: 'Check Again Your Password and Confirm Password' });
        } else {
            SignUp(data?.email, data?.password)
                .then(result => {
                    const createdUser = result.user
                    reset()
                    navigate('/', { replace: true })
                    userProfileUpdate(createdUser, data.name, data.photoUrl)
                })
        }

    }
    const userProfileUpdate = (user, name, image_url) => {
        UpdateProfile(user, name, image_url)
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <section className={`min-h-screen`}>
            <div className="container">
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
                                    <input type="password" {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.*[a-z])(?=.*\d).{6,}$/,
                                        minLength: 6, 
                                        maxLength: 8
                                    })} placeholder="password" name="password" className="input input-bordered" required />
                                    {errors.password && <span>{errors.password.message}</span>}
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