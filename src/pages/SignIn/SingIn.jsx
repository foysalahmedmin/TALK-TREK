import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import authImg from "../../assets/AuthImage.svg"
import Social from "../Shared/Social/Social";

const SingIn = () => {
    const navigate = useNavigate()
    const { SingIn } = useAuth()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        SingIn(data?.email, data?.password)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate('/', { replace: true })
            reset()
        })
    }
    return (
        <section className={`min-h-screen`}>
            <div className="container">
                <div className="hero pt-20 py-10 min-h-screen items-center">
                    <div className="hero-content flex-col lg:flex-row shadow-2xl">
                        <div className="text-center lg:text-left">
                            <img src={authImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm">
                            <h1 className="text-center font-bold text-2xl">
                                SIGN-IN
                            </h1>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {required: true})} placeholder="password" name="password" className="input input-bordered" required />
                                    {errors.password && <span>{errors.password.message}</span>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="LogIn" className="primary-btn" />
                                </div>
                            </form>
                            <p className='text-secondary text-center'>
                                New here? <Link to= '/signUp' className='text-primary'>Create a new account.</Link>
                            </p>
                            <Social />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingIn;